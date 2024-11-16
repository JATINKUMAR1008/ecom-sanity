import { defineField, defineType } from "sanity";

export const salesType = defineType({
  name: "sales",
  title: "Sales",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Sale Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Sale Description",
      type: "text",
    }),
    defineField({
      name: "discountAmount",
      title: "Discount Amount",
      type: "number",
      description: "Enter the discount amount in percentage or fixed value.",
    }),
    defineField({
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      description: "Check this box to activate the sale.",
    }),
    defineField({
      name: "validFrom",
      title: "Valid From",
      type: "datetime",
      description: "Enter the start date of the sale.",
    }),
    defineField({
      name: "validUntil",
      title: "Valid Until",
      type: "datetime",
      description: "Enter the end date of the sale.",
    }),
    defineField({
      name: "couponCode",
      title: "Coupon Code",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "title",
      discountAmount: "discountAmount",
      couponCode: "couponCode",
      isActive: "isActive",
    },
    prepare(select) {
      const { title, discountAmount, couponCode, isActive } = select;
      const status = isActive ? "Active" : "Inactive";
      return {
        title: title,
        subtitle: `${discountAmount}% off - Code: ${couponCode} - ${status}`,
      };
    },
  },
});
