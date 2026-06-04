import { useMemo, useState } from "react";
import { Plus, Download, Trash2, RotateCcw, Inbox } from "lucide-react";
import {
  Button,
  Input,
  Select,
  StatusBadge,
  Pagination,
} from "@/components/ui";
import { ORDERS, money, type OrderRow } from "@/data/mock";
import { PageHead, Callout } from "@/components/showcase/Doc";

const PAGE_SIZE = 5;

export function ListTemplate() {
  const [status, setStatus] = useState("all");
  const [keyword, setKeyword] = useState("");
  const [applied, setApplied] = useState({ status: "all", keyword: "" });
  const [page, setPage] = useState(1);

  const filtered = useMemo<OrderRow[]>(() => {
    return ORDERS.filter((o) => {
      const okStatus = applied.status === "all" || o.status === applied.status;
      const okKw =
        !applied.keyword ||
        o.id.includes(applied.keyword) ||
        o.customer.includes(applied.keyword);
      return okStatus && okKw;
    });
  }, [applied]);

  const pageRows = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const query = () => {
    setApplied({ status, keyword });
    setPage(1);
  };
  const reset = () => {
    setStatus("all");
    setKeyword("");
    setApplied({ status: "all", keyword: "" });
    setPage(1);
  };

  return (
    <>
      <PageHead
        eyebrow="Templates · 7.1"
        title="列表页 List Page"
        lead="OMS 最高频页面：Banner + 筛选工具栏 + 操作工具栏 + 数据表格 + 分页。下方为可交互真实模版。"
      />

      <Callout type="brand">
        试试筛选：选择状态或输入「禅城 / PO」后点「查询」；点「重置」恢复。无结果时表格区切换为空状态。
      </Callout>

      <div className="template-frame">
        <div className="tpl-canvas">
          <div className="page-container">
            {/* Banner */}
            <div className="page-banner">
              <h1>订单列表</h1>
              <p>管理所有经销商提交的采购订单</p>
            </div>

            {/* 筛选工具栏 */}
            <div className="filter-bar">
              <Select
                inputSize="sm"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                aria-label="订单状态"
                style={{ width: 140 }}
              >
                <option value="all">全部状态</option>
                <option value="pending">待审核</option>
                <option value="processing">配货中</option>
                <option value="done">已完成</option>
              </Select>
              <Input
                inputSize="sm"
                placeholder="订单号 / 客户名"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && query()}
                style={{ width: 200 }}
              />
              <Button size="sm" onClick={query}>
                查询
              </Button>
              <Button size="sm" variant="ghost" onClick={reset}>
                <RotateCcw className="icon-sm" aria-hidden /> 重置
              </Button>
            </div>

            {/* 操作工具栏 */}
            <div className="toolbar">
              <div className="toolbar-left">
                <Button size="sm" variant="outline">
                  <Trash2 className="icon-sm" aria-hidden /> 批量删除
                </Button>
                <Button size="sm" variant="outline">
                  <Download className="icon-sm" aria-hidden /> 批量导出
                </Button>
              </div>
              <div className="toolbar-right">
                <Button size="sm">
                  <Plus className="icon-sm" aria-hidden /> 新建订单
                </Button>
              </div>
            </div>

            {/* 表格 / 空状态 */}
            {pageRows.length > 0 ? (
              <div className="table-wrapper">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" style={{ width: 40 }}>
                        <input type="checkbox" className="checkbox" aria-label="全选" />
                      </th>
                      <th scope="col">订单号</th>
                      <th scope="col">客户名称</th>
                      <th scope="col">地区</th>
                      <th scope="col" className="col-num">金额</th>
                      <th scope="col">状态</th>
                      <th scope="col">操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pageRows.map((o) => (
                      <tr key={o.id}>
                        <td>
                          <input type="checkbox" className="checkbox" aria-label={`选择 ${o.id}`} />
                        </td>
                        <td style={{ fontVariantNumeric: "tabular-nums" }}>{o.id}</td>
                        <td>{o.customer}</td>
                        <td className="text-muted">{o.region}</td>
                        <td className="col-num">{money(o.amount)}</td>
                        <td>
                          <StatusBadge status={o.status}>{o.statusLabel}</StatusBadge>
                        </td>
                        <td>
                          <button className="link">详情</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="table-wrapper">
                <div className="empty-state">
                  <Inbox className="icon-xl empty-icon" aria-hidden />
                  <div className="empty-title">未找到匹配结果</div>
                  <div className="empty-desc">请尝试调整筛选条件或关键词</div>
                  <Button size="sm" variant="outline" onClick={reset}>
                    重置筛选
                  </Button>
                </div>
              </div>
            )}

            {/* 分页 */}
            {filtered.length > 0 && (
              <Pagination
                total={filtered.length}
                page={page}
                pageSize={PAGE_SIZE}
                onPageChange={setPage}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
