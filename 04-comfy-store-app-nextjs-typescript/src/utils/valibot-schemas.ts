import {
  object,
  pipe,
  string,
  nonEmpty,
  minLength,
  number,
  transform,
  optional,
} from "valibot";

export const productSchema = object({
  name: pipe(
    string("Name should be a string"),
    nonEmpty("Please enter a name"),
    minLength(4),
  ),
  company: pipe(string(), minLength(4)),
  price: pipe(
    string(),
    nonEmpty("you should provide a price"),
    transform(Number),
    number(),
  ),
  description: pipe(string(), nonEmpty("you should provide a description")),
  featured: pipe(
    optional(string()),
    string(),
    transform((value) => (value === "on" ? true : false)),
  ),
});
