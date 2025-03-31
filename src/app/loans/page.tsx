'use client';
import SideBar from '@/components/all/SideBar';
import RentTable from '@/components/loans/RentTable';

export default function Page() {
  return (
    <main className="flex h-screen bg-gray-50">
      <SideBar />
      <section className="flex flex-col w-full p-8 overflow-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">대출 정보</h2>
          <p className="text-muted-foreground">
            현재 대출 중인 도서 목록입니다.
          </p>
        </div>
        <RentTable />
      </section>
    </main>
  );
}
