# Sale Promotion Feature - Code Flow Documentation

## Architecture Overview

```
Database (MongoDB) → API Route → Context Provider → Components
                  ↓
            Admin Actions ← Admin UI
```

## 1. Database Layer

**File:** `prisma/schema.prisma`

```prisma
model SalePromotion {
  id              String   @id @default(auto()) @map("_id") @db.ObjectId
  isActive        Boolean  @default(false)     // Auto-calculated based on dates
  salePercentage  Float                        // e.g., 30 for 30% off
  saleName        String                       // e.g., "WINTER FLASH SALE"
  saleStartDate   DateTime                     // Sale activation date
  saleUntil       DateTime                     // Sale expiration date
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
}
```

## 2. Admin Side (Managing Sales)

### Server Actions
**Files:** `src/app/admin/_actions/`

#### `getSalePromotion.ts`
- `getAllSalePromotions()` - Fetches all sales from DB
- `deleteSalePromotion(id)` - Deletes a sale

#### `updateSalePromotion.ts`
- Takes: `{ saleName, salePercentage, saleStartDate, saleUntil }`
- **Auto-calculates `isActive`**: Checks if current date is between start/end dates
- Creates new sale promotion in DB

### Admin UI Components
**Files:** `src/app/admin/salepromotion/` and `src/app/admin/_components/`

#### `page.tsx`
- Server component that fetches all sales
- Renders form + list

#### `SalePromotionForm.tsx`
- Client component with date pickers
- On submit → calls `updateSalePromotion()`
- Clears form after success

#### `SalePromotionList.tsx`
- Displays all sales with status badges:
  - 🟢 AKTIV (currently active)
  - 🔵 GEPLANT (future/scheduled)
  - ⚫ ABGELAUFEN (expired)
- Delete button per sale

## 3. Customer Side (Displaying Sales)

### API Route
**File:** `src/app/api/salepromotion/route.ts`

```typescript
GET /api/salepromotion
```

**Logic:**
1. Gets current date/time
2. Queries DB for sales where:
   - `saleStartDate <= NOW`
   - `saleUntil >= NOW`
3. Returns first matching sale or null

**Response:**
```json
{
  "isActive": true,
  "salePercentage": 30,
  "saleName": "WINTER FLASH SALE",
  "saleUntil": "2025-12-31T00:00:00.000Z"
}
```

### Context Provider
**File:** `src/contexts/SaleProvider.tsx`

```typescript
SaleProvider wraps the entire customer-facing app
  └── Fetches sale data from /api/salepromotion on mount
  └── Provides sale data via useSale() hook
  └── Exports getSalePrice(originalPrice, percentage) utility
```

**Wrapped in:** `src/app/(customerFacing)/layout.tsx`

```tsx
<LanguageProvider>
  <SaleProvider>  ← Wraps entire site
    <SaleBanner />
    {children}
  </SaleProvider>
</LanguageProvider>
```

### Consumer Components

#### 1. `SaleBanner.tsx`
```typescript
const { isActive, salePercentage, saleName, saleUntil } = useSale();

if (!isActive) return null;  // Hide if no active sale

// Shows banner with: "🔥 SALE_NAME • -30% OFF • Until DATE"
```

#### 2. Product Pages (e.g., `magicLips/page.tsx`)
```typescript
const { isActive, salePercentage, saleName } = useSale();

// Display original price with strikethrough if sale active
{isActive && (
  <p className='line-through'>{formatCurrency(ORIGINAL_PRICE)}</p>
  <span>-{salePercentage}% {saleName}</span>
)}

// Display discounted price
<p>{formatCurrency(getSalePrice(ORIGINAL_PRICE, salePercentage))}</p>

// Add to cart with discounted price
<AddToCartButton product={{ 
  price: getSalePrice(ORIGINAL_PRICE, salePercentage)
}} />
```

#### 3. `ProductInfo.tsx` (Homepage sections)
```typescript
const { isActive, salePercentage } = useSale();

// Same pattern: show original + discounted price
```

## 4. Data Flow Summary

### Admin Creates Sale:
```
1. Admin fills form → Start: 12/6, End: 12/31, Name: "WINTER FLASH"
2. Form submits → updateSalePromotion()
3. Server action calculates isActive (true if NOW is in range)
4. Saves to MongoDB
5. Page refreshes → List shows new sale with status
```

### Customer Views Sale:
```
1. Customer visits site
2. SaleProvider useEffect() runs
3. Fetches /api/salepromotion
4. API queries DB for active sale (date range check)
5. Returns sale data to provider
6. All components using useSale() get data
7. SaleBanner shows if isActive
8. Product pages show sale badges + discounted prices
9. Cart uses discounted prices
10. Checkout/Stripe payment uses discounted total
```

## 5. Key Functions

### `getSalePrice(originalPrice, salePercentage)`
**Location:** `src/contexts/SaleProvider.tsx`

```typescript
export function getSalePrice(originalPrice: number, salePercentage: number): number {
  if (salePercentage <= 0) return originalPrice;
  return Math.round(originalPrice * (1 - salePercentage / 100));
}
```

**Used in:**
- All product pages
- ProductInfo component
- Cart calculations
- AddToCartButton

## 6. Automatic Activation Logic

### Admin Side (on save):
```typescript
const now = new Date();
const startDate = new Date(data.saleStartDate);
const endDate = new Date(data.saleUntil);
const isActive = now >= startDate && now <= endDate;
// ↑ Saved to DB
```

### API Side (on fetch):
```typescript
const now = new Date();
const salePromotion = await db.salePromotion.findFirst({
  where: {
    saleStartDate: { lte: now },  // Started already
    saleUntil: { gte: now },      // Not expired yet
  }
});
// ↑ Returns only if in date range
```

## 7. File Structure

```
src/
├── app/
│   ├── admin/
│   │   ├── _actions/
│   │   │   ├── getSalePromotion.ts      [Fetch/Delete sales]
│   │   │   └── updateSalePromotion.ts   [Create sales + auto-activate]
│   │   ├── _components/
│   │   │   ├── SalePromotionForm.tsx    [Create sale form]
│   │   │   └── SalePromotionList.tsx    [Display all sales]
│   │   └── salepromotion/
│   │       └── page.tsx                 [Admin page]
│   ├── (customerFacing)/
│   │   ├── _components/
│   │   │   ├── SaleBanner.tsx           [Top banner]
│   │   │   └── ProductInfo.tsx          [Homepage products]
│   │   ├── layout.tsx                   [Wraps with SaleProvider]
│   │   └── [product pages]              [Show sale badges]
│   └── api/
│       └── salepromotion/
│           └── route.ts                 [API endpoint]
├── contexts/
│   └── SaleProvider.tsx                 [Context + hook + utility]
└── prisma/
    └── schema.prisma                    [Database model]
```

## 8. States & Lifecycle

### Sale States:
- **🔵 GEPLANT (Planned)**: `NOW < saleStartDate`
- **🟢 AKTIV (Active)**: `saleStartDate <= NOW <= saleUntil`
- **⚫ ABGELAUFEN (Expired)**: `NOW > saleUntil`

### React Component Lifecycle:
```
1. User loads page
2. SaleProvider mounts
3. useEffect fetches /api/salepromotion
4. Sets state with sale data
5. All child components re-render with sale data
6. SaleBanner conditionally renders
7. Product pages show sale UI
```

## 9. Key Benefits of This Architecture

✅ **Centralized**: One source of truth (database)
✅ **Automatic**: Sales activate/deactivate based on dates
✅ **Efficient**: API caches, single fetch per page load
✅ **Scalable**: Can schedule multiple sales in advance
✅ **Type-safe**: TypeScript + Prisma types throughout
✅ **Real-time**: Admin changes visible after page refresh
