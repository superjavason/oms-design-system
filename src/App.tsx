import { useEffect, useState } from "react";
import { AppShell } from "@/components/showcase/AppShell";
import { findItem } from "@/data/nav";

import { OverviewPage } from "@/pages/Overview";
import { ColorsPage } from "@/pages/foundations/Colors";
import { TypographyPage } from "@/pages/foundations/Typography";
import { SpacingPage } from "@/pages/foundations/Spacing";
import { EffectsPage } from "@/pages/foundations/Effects";
import { IconsPage } from "@/pages/foundations/Icons";

import { ButtonPage } from "@/pages/components/ButtonPage";
import { CardPage } from "@/pages/components/CardPage";
import { BadgePage } from "@/pages/components/BadgePage";
import { InputPage } from "@/pages/components/InputPage";
import { TablePage } from "@/pages/components/TablePage";
import { TabsPage } from "@/pages/components/TabsPage";
import { StatusPage } from "@/pages/components/StatusPage";
import { QuickEntryPage } from "@/pages/components/QuickEntryPage";
import { ListItemPage } from "@/pages/components/ListItemPage";
import { PaginationPage } from "@/pages/components/PaginationPage";

import { DashboardTemplate } from "@/pages/templates/DashboardTemplate";
import { ListTemplate } from "@/pages/templates/ListTemplate";
import { DetailTemplate } from "@/pages/templates/DetailTemplate";
import { FormTemplate } from "@/pages/templates/FormTemplate";
import { ResultTemplate } from "@/pages/templates/ResultTemplate";
import { EmptyTemplate } from "@/pages/templates/EmptyTemplate";
import { ErrorTemplate } from "@/pages/templates/ErrorTemplate";

import { AccessibilityPage } from "@/pages/guidelines/Accessibility";
import { CopywritingPage } from "@/pages/guidelines/Copywriting";
import { AntiPatternsPage } from "@/pages/guidelines/AntiPatterns";

type PageComponent = (props: { onNavigate: (id: string) => void }) => JSX.Element;

const PAGES: Record<string, PageComponent> = {
  overview: OverviewPage,
  colors: ColorsPage,
  typography: TypographyPage,
  spacing: SpacingPage,
  effects: EffectsPage,
  icons: IconsPage,
  button: ButtonPage,
  card: CardPage,
  badge: BadgePage,
  input: InputPage,
  table: TablePage,
  tabs: TabsPage,
  status: StatusPage,
  "quick-entry": QuickEntryPage,
  "list-item": ListItemPage,
  pagination: PaginationPage,
  "tpl-dashboard": DashboardTemplate,
  "tpl-list": ListTemplate,
  "tpl-detail": DetailTemplate,
  "tpl-form": FormTemplate,
  "tpl-result": ResultTemplate,
  "tpl-empty": EmptyTemplate,
  "tpl-error": ErrorTemplate,
  a11y: AccessibilityPage,
  copywriting: CopywritingPage,
  "anti-patterns": AntiPatternsPage,
};

function readHash(): string {
  const id = window.location.hash.replace(/^#\/?/, "");
  return id && PAGES[id] ? id : "overview";
}

export function App() {
  const [current, setCurrent] = useState<string>(readHash);

  useEffect(() => {
    const onHash = () => setCurrent(readHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const navigate = (id: string) => {
    window.location.hash = `/${id}`;
    setCurrent(id);
    document.querySelector(".docs-content")?.scrollTo({ top: 0 });
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    const item = findItem(current);
    document.title = item
      ? `${item.label} · 东鹏 OMS 设计系统`
      : "东鹏 OMS 设计系统";
  }, [current]);

  const Page = PAGES[current] ?? OverviewPage;

  return (
    <AppShell current={current} onNavigate={navigate}>
      <Page onNavigate={navigate} />
    </AppShell>
  );
}
