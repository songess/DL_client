'use client';
import SideBar from '@/components/all/SideBar';
import UserSettings from '@/components/settings/UserSettings';

export default function Page() {
  return (
    <main className="flex h-screen bg-gray-50">
      <SideBar />
      <section className="flex flex-col w-full p-8 overflow-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">설정</h2>
          <p className="text-muted-foreground">계정 및 앱 설정을 관리합니다.</p>
        </div>
        <UserSettings />
      </section>
    </main>
  );
}
