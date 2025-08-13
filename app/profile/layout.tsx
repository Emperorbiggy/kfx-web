// app/profile/layout.tsx
import HeaderLayout from "@/components/layouts/HeaderLayout";
import SidebarLayout from "@/components/layouts/SidebarLayout";

export default function ProfileSectionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarLayout>
      <HeaderLayout withSidebar={true}>
        <div className="flex-1 bg-gray-50 min-h-[calc(100vh-64px)]">
          {children}
        </div>
      </HeaderLayout>
    </SidebarLayout>
  );
}