import ComponentCard from "@/components/admin/common/ComponentCard";
import PageBreadcrumb from "@/components/admin/common/PageBreadcrumb";
import UserTable from "@/components/admin/tables/UserTable";

export default function CustomerPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Customers" />
      <div className="space-y-6">
        <ComponentCard title="Customers">
          <UserTable />
        </ComponentCard>
      </div>
    </div>
  );
}
