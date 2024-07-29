"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useDiscount } from "@/contexts/DiscountProvider";
import { FormEvent, useState } from "react";

export function AddtDiscount() {
  const { setDiscount } = useDiscount();
  const [date, setDate] = useState<Date | undefined>();
  const [error, setError] = useState<string | undefined>();
  const [data, setData] = useState<string>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const code = data.code;
    const amount = data.amount;

    if (!date || !code || !amount) {
      alert("Please select a date");
      return;
    }

    fetch("/api/discount", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code, date, amount }),
    })
      .then((response) => response.json())
      .then((data) => {
        setDiscount((prev) => [...prev, data.discount]);
      })
      .catch((error) => setError("An error occurred while creating discount"));
  };

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit} className="flex flex-col ">
        <h3 className="text-lg w-80 mb-2 text-left">
          Apply discount code to all customers who signed up before a certain
          date. Select a date to apply the discount code to.
        </h3>
        <p>{data}</p>
        <div className="mb-4 flex flex-col">
          <label htmlFor="code" className="mb-2">
            Discount code
          </label>
          <input
            type="text"
            name="code"
            placeholder="Enter discount code"
            className="rounded-md border shadow p-2 w-80 mb-1"
          />
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="amount" className="mb-2">
            Discount amount in percent
          </label>
          <input
            type="number"
            name="amount"
            placeholder="Enter discount amount (%)"
            className="rounded-md border shadow p-2 w-80 mb-1"
          />
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="default" className="w-80 mb-2">
              Select a date
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border shadow "
            />
          </PopoverContent>
        </Popover>
        <Button type="submit" className="w-80 mb-2">
          Apply
        </Button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}
