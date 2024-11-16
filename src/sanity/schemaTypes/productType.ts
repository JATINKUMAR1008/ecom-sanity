import { TrolleyIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Products",
  type: "document",
  icon: TrolleyIcon,
  fields: [
    defineField({
      name: "name",
      title: "Product name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
            source: "name",
            maxLength: 96,
        },
        validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "description",
      title: "Product description",
      type: "blockContent",
    }),
    defineField({
      name: "price",
      title: "Product price",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "category" },
        },
      ],
    }),
    defineField({
      name: "stock",
      title: "Stock",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
      price: "price",
    },
    prepare(select) {
      return {
        title: select.title,
        media: select.media,
        subtitle: `$${select.price}`,
      };
    },
  },
});
