import { useState } from "react";
import { Button, Input, Select, Textarea } from "@/components/ui";
import { money } from "@/data/mock";
import { PageHead, Callout } from "@/components/showcase/Doc";

export function FormTemplate() {
  const [customer, setCustomer] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const errors = {
    customer: !customer ? "请选择客户名称" : "",
    type: !type ? "请选择订单类型" : "",
    price: !price ? "请输入单价" : "",
    qty: !qty ? "请输入数量" : "",
  };
  const subtotal =
    price && qty ? Number(price) * Number(qty) : 0;

  const blur = (k: string) => setTouched((t) => ({ ...t, [k]: true }));

  return (
    <>
      <PageHead
        eyebrow="Templates · 7.3"
        title="表单页 Form Page"
        lead="Banner + Steps 步骤条 + 720px 居中表单（分组 + 必填标记 + onBlur 校验）+ sticky 底部操作栏。"
      />

      <Callout type="brand">
        失焦校验：点入字段再点出但留空，下方出现红色提示。单价 × 数量自动计算小计。
      </Callout>

      <div className="template-frame">
        <div className="tpl-canvas">
          <div className="form-page page-container">
            <div className="page-banner">
              <h1>新建订单</h1>
              <p>填写订单信息，完成后提交审核</p>
            </div>

            {/* Steps */}
            <div className="steps">
              <span className="step active">
                <span className="step-num">1</span> 基本信息
              </span>
              <span className="step-divider" />
              <span className="step">
                <span className="step-num">2</span> 商品选择
              </span>
              <span className="step-divider" />
              <span className="step">
                <span className="step-num">3</span> 确认提交
              </span>
            </div>

            {/* 表单 */}
            <div className="form-container">
              <fieldset className="form-section">
                <legend className="form-section-title">基础信息</legend>

                <div className="form-field">
                  <label className="form-label" htmlFor="f-customer">
                    客户名称 <span className="required" aria-hidden>*</span>
                  </label>
                  <Select
                    id="f-customer"
                    value={customer}
                    error={touched.customer && !!errors.customer}
                    aria-required
                    onChange={(e) => setCustomer(e.target.value)}
                    onBlur={() => blur("customer")}
                    style={{ maxWidth: 320 }}
                  >
                    <option value="">请选择</option>
                    <option value="1">佛山禅城建材城</option>
                    <option value="2">广州天河旗舰店</option>
                  </Select>
                  {touched.customer && errors.customer && (
                    <div className="field-error">{errors.customer}</div>
                  )}
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="f-type">
                    订单类型 <span className="required" aria-hidden>*</span>
                  </label>
                  <Select
                    id="f-type"
                    value={type}
                    error={touched.type && !!errors.type}
                    aria-required
                    onChange={(e) => setType(e.target.value)}
                    onBlur={() => blur("type")}
                    style={{ maxWidth: 320 }}
                  >
                    <option value="">请选择</option>
                    <option value="normal">常规采购</option>
                    <option value="urgent">紧急补货</option>
                  </Select>
                  {touched.type && errors.type && (
                    <div className="field-error">{errors.type}</div>
                  )}
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="f-remark">
                    备注
                  </label>
                  <Textarea id="f-remark" placeholder="请输入备注信息（选填）" />
                </div>
              </fieldset>

              <fieldset className="form-section">
                <legend className="form-section-title">金额信息</legend>
                <div className="form-row">
                  <div className="form-field" style={{ marginBottom: 0 }}>
                    <label className="form-label" htmlFor="f-price">
                      单价 <span className="required" aria-hidden>*</span>
                    </label>
                    <Input
                      id="f-price"
                      type="number"
                      placeholder="0.00"
                      value={price}
                      error={touched.price && !!errors.price}
                      onChange={(e) => setPrice(e.target.value)}
                      onBlur={() => blur("price")}
                    />
                    {touched.price && errors.price && (
                      <div className="field-error">{errors.price}</div>
                    )}
                  </div>
                  <div className="form-field" style={{ marginBottom: 0 }}>
                    <label className="form-label" htmlFor="f-qty">
                      数量 <span className="required" aria-hidden>*</span>
                    </label>
                    <Input
                      id="f-qty"
                      type="number"
                      placeholder="0"
                      value={qty}
                      error={touched.qty && !!errors.qty}
                      onChange={(e) => setQty(e.target.value)}
                      onBlur={() => blur("qty")}
                    />
                    {touched.qty && errors.qty && (
                      <div className="field-error">{errors.qty}</div>
                    )}
                  </div>
                </div>
                <div className="form-field" style={{ marginTop: "var(--space-5)" }}>
                  <label className="form-label">小计</label>
                  <div className="form-value" style={{ fontVariantNumeric: "tabular-nums" }}>
                    {money(subtotal)}
                  </div>
                </div>
              </fieldset>
            </div>

            {/* sticky 底部 */}
            <div className="form-footer">
              <Button variant="ghost">取消</Button>
              <Button variant="outline">保存草稿</Button>
              <Button
                onClick={() =>
                  setTouched({ customer: true, type: true, price: true, qty: true })
                }
              >
                提交
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
