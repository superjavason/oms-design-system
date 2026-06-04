import { useState } from "react";
import { Pagination } from "@/components/ui";
import {
  PageHead,
  DocSection,
  Preview,
  CodeBlock,
} from "@/components/showcase/Doc";

export function PaginationPage() {
  const [page, setPage] = useState(3);
  const [page2, setPage2] = useState(1);

  return (
    <>
      <PageHead
        eyebrow="Components · 6.11"
        title="分页 Pagination"
        lead="左侧「共 N 条」，右侧页码。按钮 28px 高，圆角 4px，选中态品牌色。超长页码自动折叠。"
      />

      <DocSection title="基础分页" desc="点击页码或前后箭头切换。当前在第 3 页。">
        <Preview align="block" variant="plain">
          <Pagination total={1286} page={page} pageSize={20} onPageChange={setPage} />
        </Preview>
        <CodeBlock
          code={`<Pagination
  total={1286}
  page={page}
  pageSize={20}
  onPageChange={setPage}
/>`}
        />
      </DocSection>

      <DocSection title="少量数据" desc="总页数 ≤ 7 时不折叠。">
        <Preview align="block" variant="plain">
          <Pagination total={86} page={page2} pageSize={20} onPageChange={setPage2} />
        </Preview>
      </DocSection>
    </>
  );
}
