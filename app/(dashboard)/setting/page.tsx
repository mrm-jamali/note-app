"use client";

import Page from "@/components/layout/Page";
import PageHeader from "@/components/layout/PageHeader";

import ProfileSettings from "@/components/settings/ProfileSettings";
import AppearanceSettings from "@/components/settings/AppearanceSettings";
import NotificationSettings from "@/components/settings/NotifSettings";
import LogoutSettings from "@/components/settings/LogoutSettings";

export default function SettingsPage() {
  return (
    <Page>
      <PageHeader
        title="تنظیمات"
        description="تنظیمات حساب کاربری و برنامه"
      />

      <div className="mt-8 space-y-6">
        <ProfileSettings />
        <AppearanceSettings />
        <NotificationSettings />
        <LogoutSettings />
      </div>
    </Page>
  );
}