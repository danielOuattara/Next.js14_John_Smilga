import EmptyList from "@/components/global/EmptyList";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatCurrency } from "@/utils/formatCurrency";
import { FormContainer, IconActionButton } from "@/components/form";
import { deleteProduct, fetchAdminProducts } from "@/utils/actions-admin";

export default async function AdminProductPage() {
  const products = await fetchAdminProducts();

  if (products.length === 0) return <EmptyList />;
  return (
    <section>
      <Table>
        <TableCaption className="capitalize">
          total products : {products.length}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Product Name</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                <Link
                  href={`/products/${product.id}`}
                  className="underline text-muted-foreground tracking-wide capitalize"
                >
                  {product.name}
                </Link>
              </TableCell>
              <TableCell>{product.company}</TableCell>
              <TableCell>{formatCurrency(product.price)}</TableCell>

              <TableCell className="flex items-center gap-x-2">
                <Link href={`/admin/products/${product.id}/edit`}>
                  <IconActionButton actionType={"edit"} />
                </Link>
                <FormContainer action={deleteProduct.bind(null, product.id)}>
                  <IconActionButton actionType={"delete"} />
                </FormContainer>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
