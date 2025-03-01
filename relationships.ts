import { relationships } from "@rocicorp/zero";
import {
  accounting_report,
  accounting_report_type,
  assistant,
  bank_statement_transaction,
  bank_statement_transaction__bst_history_item,
  bank_statement_transaction__rate_type,
  bank_statement_transaction__scheme_name,
  bank_statement_transaction__status,
  bst_history_item,
  chat,
  chat_message,
  checklist,
  checklist__checklist_item,
  checklist_item,
  checklist_item_group,
  classification_rule_expense,
  classification_rule_expense__classification_rule_industry,
  classification_rule_industry,
  classification_rule_payment_method,
  currency,
  customer,
  customer__user,
  customer__vat_option,
  customer_assigned_user,
  customer_eb_account,
  customer_eb_session,
  customer_iban,
  customer_invite,
  customer_ledger_account,
  customer_maventa_api_keys,
  customer_procountor_api_key,
  customer_supplier_notification,
  customer_verification,
  einvoice_network,
  einvoice_operator,
  fine_tune_attachment,
  fine_tune_data,
  fine_tune_model,
  fine_tune_model_procountor_training_data,
  fine_tune_model_tilit_training_data,
  kysely_migration,
  kysely_migration_lock,
  ledger_account_category,
  organization,
  payment_method_breakdown,
  project,
  purchase_invoice,
  purchase_invoice__project,
  purchase_invoice__purchase_invoice_accounting_status,
  purchase_invoice__purchase_invoice_status,
  purchase_invoice_accounting_status,
  purchase_invoice_analysis,
  purchase_invoice_file,
  purchase_invoice_iban,
  purchase_invoice_marked_payment_event,
  purchase_invoice_maventa_action,
  purchase_invoice_payment_method,
  purchase_invoice_status,
  purchase_invoice_xml,
  receipt,
  receipt__project,
  receipt__receipt_status,
  receipt_analysis,
  receipt_iban,
  receipt_image,
  receipt_status,
  reconciliation_join,
  role,
  sales_invoice,
  sales_invoice__project,
  sales_invoice__sales_invoice_accounting_status,
  sales_invoice_accounting_status,
  sales_invoice_attachment,
  sales_invoice_customer,
  sales_invoice_customer_einvoice_address,
  sales_invoice_customer_item,
  sales_invoice_item,
  sales_invoice_product,
  sales_invoice_xml,
  user,
  user_mobile_info,
  vat_breakdown,
  vat_code,
  vat_option,
  permissions,
  schemaVersions,
  clients,
  shardConfig,
  versionHistory,
} from "./tables";

export const accounting_report_relationships = relationships(accounting_report, ({ one, many }) => ({
  accounting_report_type: one({
    sourceField: ["accounting_report_type_id"],
    destSchema: accounting_report_type,
    destField: ["id"],
  }),
  customer: one({
    sourceField: ["customer_id"],
    destSchema: customer,
    destField: ["id"],
  }),
  user: one({
    sourceField: ["user_id"],
    destSchema: user,
    destField: ["id"],
  }),
}));
export const assistant_relationships = relationships(assistant, ({ one, many }) => ({
  customer: one({
    sourceField: ["customer_id"],
    destSchema: customer,
    destField: ["id"],
  }),
  user: one({
    sourceField: ["user_id"],
    destSchema: user,
    destField: ["id"],
  }),
}));
export const bank_statement_transaction_relationships = relationships(
  bank_statement_transaction,
  ({ one, many }) => ({
    bank_statement_transaction__scheme_name: one({
      sourceField: ["creditor__organisation_id__scheme_name_id"],
      destSchema: bank_statement_transaction__scheme_name,
      destField: ["id"],
    }),
    bank_statement_transaction__scheme_name_1: one({
      sourceField: ["creditor__private_id__scheme_name_id"],
      destSchema: bank_statement_transaction__scheme_name,
      destField: ["id"],
    }),
    bank_statement_transaction__scheme_name_2: one({
      sourceField: ["creditor_account__other__scheme_name_id"],
      destSchema: bank_statement_transaction__scheme_name,
      destField: ["id"],
    }),
    customer_eb_account: one({
      sourceField: ["customer_eb_account_id"],
      destSchema: customer_eb_account,
      destField: ["id"],
    }),
    customer: one({
      sourceField: ["customer_id"],
      destSchema: customer,
      destField: ["id"],
    }),
    bank_statement_transaction__scheme_name_3: one({
      sourceField: ["debtor__organisation_id__scheme_name_id"],
      destSchema: bank_statement_transaction__scheme_name,
      destField: ["id"],
    }),
    bank_statement_transaction__scheme_name_4: one({
      sourceField: ["debtor__private_id__scheme_name_id"],
      destSchema: bank_statement_transaction__scheme_name,
      destField: ["id"],
    }),
    bank_statement_transaction__scheme_name_5: one({
      sourceField: ["debtor_account__other__scheme_name_id"],
      destSchema: bank_statement_transaction__scheme_name,
      destField: ["id"],
    }),
    bank_statement_transaction__rate_type: one({
      sourceField: ["exchange_rate__rate_type_id"],
      destSchema: bank_statement_transaction__rate_type,
      destField: ["id"],
    }),
    receipt: one({
      sourceField: ["receipt_id"],
      destSchema: receipt,
      destField: ["id"],
    }),
    bank_statement_transaction__status: one({
      sourceField: ["status_id"],
      destSchema: bank_statement_transaction__status,
      destField: ["id"],
    }),
  })
);
export const bank_statement_transaction__bst_history_item_relationships = relationships(
  bank_statement_transaction__bst_history_item,
  ({ one, many }) => ({
    bank_statement_transaction: one({
      sourceField: ["bank_statement_transaction_id"],
      destSchema: bank_statement_transaction,
      destField: ["id"],
    }),
    bst_history_item: one({
      sourceField: ["bst_history_item_id"],
      destSchema: bst_history_item,
      destField: ["id"],
    }),
    user: one({
      sourceField: ["user_id"],
      destSchema: user,
      destField: ["id"],
    }),
  })
);
export const chat_relationships = relationships(chat, ({ one, many }) => ({
  customer: one({
    sourceField: ["customer_id"],
    destSchema: customer,
    destField: ["id"],
  }),
  user: one({
    sourceField: ["user_id"],
    destSchema: user,
    destField: ["id"],
  }),
}));
export const chat_message_relationships = relationships(chat_message, ({ one, many }) => ({
  chat: one({
    sourceField: ["chat_id"],
    destSchema: chat,
    destField: ["id"],
  }),
  user: one({
    sourceField: ["user_id"],
    destSchema: user,
    destField: ["id"],
  }),
}));
export const checklist_relationships = relationships(checklist, ({ one, many }) => ({
  customer: one({
    sourceField: ["customer_id"],
    destSchema: customer,
    destField: ["id"],
  }),
}));
export const checklist__checklist_item_relationships = relationships(
  checklist__checklist_item,
  ({ one, many }) => ({
    checklist: one({
      sourceField: ["checklist_id"],
      destSchema: checklist,
      destField: ["id"],
    }),
    checklist_item: one({
      sourceField: ["checklist_item_id"],
      destSchema: checklist_item,
      destField: ["id"],
    }),
  })
);
export const checklist_item_relationships = relationships(checklist_item, ({ one, many }) => ({
  checklist_item_group: one({
    sourceField: ["checklist_item_group_id"],
    destSchema: checklist_item_group,
    destField: ["id"],
  }),
}));
export const classification_rule_expense_relationships = relationships(
  classification_rule_expense,
  ({ one, many }) => ({
    currency: one({
      sourceField: ["currency_id"],
      destSchema: currency,
      destField: ["id"],
    }),
    vat_option: one({
      sourceField: ["vat_option_id"],
      destSchema: vat_option,
      destField: ["id"],
    }),
  })
);
export const classification_rule_expense__classification_rule_industry_relationships = relationships(
  classification_rule_expense__classification_rule_industry,
  ({ one, many }) => ({
    classification_rule_expense: one({
      sourceField: ["classification_rule_expense_id"],
      destSchema: classification_rule_expense,
      destField: ["id"],
    }),
    classification_rule_industry: one({
      sourceField: ["classification_rule_industry_id"],
      destSchema: classification_rule_industry,
      destField: ["id"],
    }),
  })
);
export const classification_rule_industry_relationships = relationships(
  classification_rule_industry,
  ({ one, many }) => ({
    fine_tune_model: one({
      sourceField: ["fine_tune_model_id"],
      destSchema: fine_tune_model,
      destField: ["id"],
    }),
  })
);
export const customer_relationships = relationships(customer, ({ one, many }) => ({
  customer_eb_account: one({
    sourceField: ["billing_account"],
    destSchema: customer_eb_account,
    destField: ["id"],
  }),
  classification_rule_industry: one({
    sourceField: ["classification_rule_industry_id"],
    destSchema: classification_rule_industry,
    destField: ["id"],
  }),
  fine_tune_model: one({
    sourceField: ["fine_tune_model_id"],
    destSchema: fine_tune_model,
    destField: ["id"],
  }),
  organization: one({
    sourceField: ["organization_id"],
    destSchema: organization,
    destField: ["id"],
  }),
  vat_code: one({
    sourceField: ["vat_0_code_id"],
    destSchema: vat_code,
    destField: ["id"],
  }),
}));
export const customer__user_relationships = relationships(customer__user, ({ one, many }) => ({
  customer: one({
    sourceField: ["customer_id"],
    destSchema: customer,
    destField: ["id"],
  }),
  user: one({
    sourceField: ["user_id"],
    destSchema: user,
    destField: ["id"],
  }),
}));
export const customer__vat_option_relationships = relationships(customer__vat_option, ({ one, many }) => ({
  customer: one({
    sourceField: ["customer_id"],
    destSchema: customer,
    destField: ["id"],
  }),
  vat_option: one({
    sourceField: ["vat_option_id"],
    destSchema: vat_option,
    destField: ["id"],
  }),
}));
export const customer_assigned_user_relationships = relationships(
  customer_assigned_user,
  ({ one, many }) => ({
    customer: one({
      sourceField: ["customer_id"],
      destSchema: customer,
      destField: ["id"],
    }),
    user: one({
      sourceField: ["user_id"],
      destSchema: user,
      destField: ["id"],
    }),
  })
);
export const customer_eb_account_relationships = relationships(customer_eb_account, ({ one, many }) => ({
  customer_eb_session: one({
    sourceField: ["customer_eb_session"],
    destSchema: customer_eb_session,
    destField: ["id"],
  }),
  customer: one({
    sourceField: ["customer_id"],
    destSchema: customer,
    destField: ["id"],
  }),
}));
export const customer_eb_session_relationships = relationships(customer_eb_session, ({ one, many }) => ({
  customer: one({
    sourceField: ["customer_id"],
    destSchema: customer,
    destField: ["id"],
  }),
  user: one({
    sourceField: ["user_id"],
    destSchema: user,
    destField: ["id"],
  }),
}));
export const customer_iban_relationships = relationships(customer_iban, ({ one, many }) => ({
  customer: one({
    sourceField: ["customer_id"],
    destSchema: customer,
    destField: ["id"],
  }),
}));
export const customer_invite_relationships = relationships(customer_invite, ({ one, many }) => ({
  customer: one({
    sourceField: ["customer_id"],
    destSchema: customer,
    destField: ["id"],
  }),
}));
export const customer_ledger_account_relationships = relationships(
  customer_ledger_account,
  ({ one, many }) => ({
    ledger_account_category: one({
      sourceField: ["category_id"],
      destSchema: ledger_account_category,
      destField: ["id"],
    }),
    customer: one({
      sourceField: ["customer_id"],
      destSchema: customer,
      destField: ["id"],
    }),
  })
);
export const customer_maventa_api_keys_relationships = relationships(
  customer_maventa_api_keys,
  ({ one, many }) => ({
    customer: one({
      sourceField: ["customer_id"],
      destSchema: customer,
      destField: ["id"],
    }),
  })
);
export const customer_procountor_api_key_relationships = relationships(
  customer_procountor_api_key,
  ({ one, many }) => ({
    customer: one({
      sourceField: ["customer_id"],
      destSchema: customer,
      destField: ["id"],
    }),
  })
);
export const customer_supplier_notification_relationships = relationships(
  customer_supplier_notification,
  ({ one, many }) => ({
    customer: one({
      sourceField: ["customer_id"],
      destSchema: customer,
      destField: ["id"],
    }),
    user: one({
      sourceField: ["user_id"],
      destSchema: user,
      destField: ["id"],
    }),
  })
);
export const customer_verification_relationships = relationships(customer_verification, ({ one, many }) => ({
  customer: one({
    sourceField: ["customer_id"],
    destSchema: customer,
    destField: ["id"],
  }),
  user: one({
    sourceField: ["user_id"],
    destSchema: user,
    destField: ["id"],
  }),
}));
export const fine_tune_attachment_relationships = relationships(fine_tune_attachment, ({ one, many }) => ({
  fine_tune_data: one({
    sourceField: ["fine_tune_data_id"],
    destSchema: fine_tune_data,
    destField: ["id"],
  }),
}));
export const fine_tune_data_relationships = relationships(fine_tune_data, ({ one, many }) => ({
  classification_rule_industry: one({
    sourceField: ["classification_rule_industry_id"],
    destSchema: classification_rule_industry,
    destField: ["id"],
  }),
  customer: one({
    sourceField: ["customer_id"],
    destSchema: customer,
    destField: ["id"],
  }),
}));
export const fine_tune_model_relationships = relationships(fine_tune_model, ({ one, many }) => ({
  user: one({
    sourceField: ["created_by"],
    destSchema: user,
    destField: ["id"],
  }),
}));
export const fine_tune_model_procountor_training_data_relationships = relationships(
  fine_tune_model_procountor_training_data,
  ({ one, many }) => ({
    fine_tune_model: one({
      sourceField: ["model_id"],
      destSchema: fine_tune_model,
      destField: ["id"],
    }),
    fine_tune_data: one({
      sourceField: ["receipt_id"],
      destSchema: fine_tune_data,
      destField: ["id"],
    }),
  })
);
export const fine_tune_model_tilit_training_data_relationships = relationships(
  fine_tune_model_tilit_training_data,
  ({ one, many }) => ({
    fine_tune_model: one({
      sourceField: ["model_id"],
      destSchema: fine_tune_model,
      destField: ["id"],
    }),
    purchase_invoice: one({
      sourceField: ["purchase_invoice_id"],
      destSchema: purchase_invoice,
      destField: ["id"],
    }),
    receipt: one({
      sourceField: ["receipt_id"],
      destSchema: receipt,
      destField: ["id"],
    }),
  })
);
export const payment_method_breakdown_relationships = relationships(
  payment_method_breakdown,
  ({ one, many }) => ({
    purchase_invoice: one({
      sourceField: ["purchase_invoice_id"],
      destSchema: purchase_invoice,
      destField: ["id"],
    }),
    receipt: one({
      sourceField: ["receipt_id"],
      destSchema: receipt,
      destField: ["id"],
    }),
    sales_invoice: one({
      sourceField: ["sales_invoice_id"],
      destSchema: sales_invoice,
      destField: ["id"],
    }),
    vat_option: one({
      sourceField: ["vat_option_id"],
      destSchema: vat_option,
      destField: ["id"],
    }),
  })
);
export const project_relationships = relationships(project, ({ one, many }) => ({
  customer: one({
    sourceField: ["customer_id"],
    destSchema: customer,
    destField: ["id"],
  }),
}));
export const purchase_invoice_relationships = relationships(purchase_invoice, ({ one, many }) => ({
  currency: one({
    sourceField: ["currency_id"],
    destSchema: currency,
    destField: ["id"],
  }),
  customer: one({
    sourceField: ["customer_id"],
    destSchema: customer,
    destField: ["id"],
  }),
  purchase_invoice_marked_payment_event: one({
    sourceField: ["purchase_invoice_marked_payment_event"],
    destSchema: purchase_invoice_marked_payment_event,
    destField: ["id"],
  }),
}));
export const purchase_invoice__project_relationships = relationships(
  purchase_invoice__project,
  ({ one, many }) => ({
    project: one({
      sourceField: ["project_id"],
      destSchema: project,
      destField: ["id"],
    }),
    purchase_invoice: one({
      sourceField: ["purchase_invoice_id"],
      destSchema: purchase_invoice,
      destField: ["id"],
    }),
  })
);
export const purchase_invoice__purchase_invoice_accounting_status_relationships = relationships(
  purchase_invoice__purchase_invoice_accounting_status,
  ({ one, many }) => ({
    purchase_invoice_accounting_status: one({
      sourceField: ["purchase_invoice_accounting_status_id"],
      destSchema: purchase_invoice_accounting_status,
      destField: ["id"],
    }),
    purchase_invoice: one({
      sourceField: ["purchase_invoice_id"],
      destSchema: purchase_invoice,
      destField: ["id"],
    }),
    user: one({
      sourceField: ["user_id"],
      destSchema: user,
      destField: ["id"],
    }),
  })
);
export const purchase_invoice__purchase_invoice_status_relationships = relationships(
  purchase_invoice__purchase_invoice_status,
  ({ one, many }) => ({
    purchase_invoice: one({
      sourceField: ["purchase_invoice_id"],
      destSchema: purchase_invoice,
      destField: ["id"],
    }),
    purchase_invoice_status: one({
      sourceField: ["purchase_invoice_status_id"],
      destSchema: purchase_invoice_status,
      destField: ["id"],
    }),
    user: one({
      sourceField: ["user_id"],
      destSchema: user,
      destField: ["id"],
    }),
  })
);
export const purchase_invoice_analysis_relationships = relationships(
  purchase_invoice_analysis,
  ({ one, many }) => ({
    purchase_invoice: one({
      sourceField: ["purchase_invoice_id"],
      destSchema: purchase_invoice,
      destField: ["id"],
    }),
  })
);
export const purchase_invoice_file_relationships = relationships(purchase_invoice_file, ({ one, many }) => ({
  purchase_invoice: one({
    sourceField: ["purchase_invoice_id"],
    destSchema: purchase_invoice,
    destField: ["id"],
  }),
}));
export const purchase_invoice_iban_relationships = relationships(purchase_invoice_iban, ({ one, many }) => ({
  purchase_invoice: one({
    sourceField: ["purchase_invoice_id"],
    destSchema: purchase_invoice,
    destField: ["id"],
  }),
}));
export const purchase_invoice_marked_payment_event_relationships = relationships(
  purchase_invoice_marked_payment_event,
  ({ one, many }) => ({
    purchase_invoice_payment_method: one({
      sourceField: ["payment_method_id"],
      destSchema: purchase_invoice_payment_method,
      destField: ["id"],
    }),
    user: one({
      sourceField: ["user_id"],
      destSchema: user,
      destField: ["id"],
    }),
  })
);
export const purchase_invoice_maventa_action_relationships = relationships(
  purchase_invoice_maventa_action,
  ({ one, many }) => ({
    purchase_invoice: one({
      sourceField: ["purchase_invoice_id"],
      destSchema: purchase_invoice,
      destField: ["id"],
    }),
  })
);
export const purchase_invoice_xml_relationships = relationships(purchase_invoice_xml, ({ one, many }) => ({
  purchase_invoice: one({
    sourceField: ["purchase_invoice_id"],
    destSchema: purchase_invoice,
    destField: ["id"],
  }),
}));
export const receipt_relationships = relationships(receipt, ({ one, many }) => ({
  classification_rule_expense: one({
    sourceField: ["classification_rule_expense_id"],
    destSchema: classification_rule_expense,
    destField: ["id"],
  }),
  currency: one({
    sourceField: ["currency_id"],
    destSchema: currency,
    destField: ["id"],
  }),
  customer: one({
    sourceField: ["customer_id"],
    destSchema: customer,
    destField: ["id"],
  }),
  user: one({
    sourceField: ["user_id"],
    destSchema: user,
    destField: ["id"],
  }),
}));
export const receipt__project_relationships = relationships(receipt__project, ({ one, many }) => ({
  project: one({
    sourceField: ["project_id"],
    destSchema: project,
    destField: ["id"],
  }),
  receipt: one({
    sourceField: ["receipt_id"],
    destSchema: receipt,
    destField: ["id"],
  }),
}));
export const receipt__receipt_status_relationships = relationships(
  receipt__receipt_status,
  ({ one, many }) => ({
    receipt: one({
      sourceField: ["receipt_id"],
      destSchema: receipt,
      destField: ["id"],
    }),
    receipt_status: one({
      sourceField: ["receipt_status_id"],
      destSchema: receipt_status,
      destField: ["id"],
    }),
    user: one({
      sourceField: ["user_id"],
      destSchema: user,
      destField: ["id"],
    }),
  })
);
export const receipt_analysis_relationships = relationships(receipt_analysis, ({ one, many }) => ({
  fine_tune_model: one({
    sourceField: ["fine_tune_model_id"],
    destSchema: fine_tune_model,
    destField: ["id"],
  }),
  receipt: one({
    sourceField: ["receipt_id"],
    destSchema: receipt,
    destField: ["id"],
  }),
}));
export const receipt_iban_relationships = relationships(receipt_iban, ({ one, many }) => ({
  receipt: one({
    sourceField: ["receipt_id"],
    destSchema: receipt,
    destField: ["id"],
  }),
}));
export const receipt_image_relationships = relationships(receipt_image, ({ one, many }) => ({
  receipt: one({
    sourceField: ["receipt_id"],
    destSchema: receipt,
    destField: ["id"],
  }),
}));
export const reconciliation_join_relationships = relationships(reconciliation_join, ({ one, many }) => ({
  bank_statement_transaction: one({
    sourceField: ["bank_statement_transaction_id"],
    destSchema: bank_statement_transaction,
    destField: ["id"],
  }),
  bank_statement_transaction_1: one({
    sourceField: ["bank_statement_transaction_id_related"],
    destSchema: bank_statement_transaction,
    destField: ["id"],
  }),
  purchase_invoice: one({
    sourceField: ["purchase_invoice_id"],
    destSchema: purchase_invoice,
    destField: ["id"],
  }),
  purchase_invoice_1: one({
    sourceField: ["purchase_invoice_id_related"],
    destSchema: purchase_invoice,
    destField: ["id"],
  }),
  receipt: one({
    sourceField: ["receipt_id"],
    destSchema: receipt,
    destField: ["id"],
  }),
  receipt_1: one({
    sourceField: ["receipt_id_related"],
    destSchema: receipt,
    destField: ["id"],
  }),
  sales_invoice: one({
    sourceField: ["sales_invoice_id"],
    destSchema: sales_invoice,
    destField: ["id"],
  }),
  sales_invoice_1: one({
    sourceField: ["sales_invoice_id_related"],
    destSchema: sales_invoice,
    destField: ["id"],
  }),
}));
export const sales_invoice_relationships = relationships(sales_invoice, ({ one, many }) => ({
  currency: one({
    sourceField: ["currency_id"],
    destSchema: currency,
    destField: ["id"],
  }),
  customer: one({
    sourceField: ["customer_id"],
    destSchema: customer,
    destField: ["id"],
  }),
  einvoice_network: one({
    sourceField: ["destination_einvoice_network_id"],
    destSchema: einvoice_network,
    destField: ["id"],
  }),
  einvoice_operator: one({
    sourceField: ["destination_einvoice_operator_id"],
    destSchema: einvoice_operator,
    destField: ["id"],
  }),
  sales_invoice_customer: one({
    sourceField: ["sales_invoice_customer_id"],
    destSchema: sales_invoice_customer,
    destField: ["id"],
  }),
  sales_invoice_customer_item: one({
    sourceField: ["sales_invoice_customer_item_id"],
    destSchema: sales_invoice_customer_item,
    destField: ["id"],
  }),
}));
export const sales_invoice__project_relationships = relationships(
  sales_invoice__project,
  ({ one, many }) => ({
    project: one({
      sourceField: ["project_id"],
      destSchema: project,
      destField: ["id"],
    }),
    sales_invoice: one({
      sourceField: ["sales_invoice_id"],
      destSchema: sales_invoice,
      destField: ["id"],
    }),
  })
);
export const sales_invoice__sales_invoice_accounting_status_relationships = relationships(
  sales_invoice__sales_invoice_accounting_status,
  ({ one, many }) => ({
    sales_invoice_accounting_status: one({
      sourceField: ["sales_invoice_accounting_status_id"],
      destSchema: sales_invoice_accounting_status,
      destField: ["id"],
    }),
    sales_invoice: one({
      sourceField: ["sales_invoice_id"],
      destSchema: sales_invoice,
      destField: ["id"],
    }),
    user: one({
      sourceField: ["user_id"],
      destSchema: user,
      destField: ["id"],
    }),
  })
);
export const sales_invoice_attachment_relationships = relationships(
  sales_invoice_attachment,
  ({ one, many }) => ({
    sales_invoice: one({
      sourceField: ["sales_invoice_id"],
      destSchema: sales_invoice,
      destField: ["id"],
    }),
  })
);
export const sales_invoice_customer_relationships = relationships(
  sales_invoice_customer,
  ({ one, many }) => ({
    customer: one({
      sourceField: ["customer_id"],
      destSchema: customer,
      destField: ["id"],
    }),
  })
);
export const sales_invoice_customer_einvoice_address_relationships = relationships(
  sales_invoice_customer_einvoice_address,
  ({ one, many }) => ({
    einvoice_network: one({
      sourceField: ["einvoice_network_id"],
      destSchema: einvoice_network,
      destField: ["id"],
    }),
    einvoice_operator: one({
      sourceField: ["einvoice_operator_id"],
      destSchema: einvoice_operator,
      destField: ["id"],
    }),
    sales_invoice_customer: one({
      sourceField: ["sales_invoice_customer_id"],
      destSchema: sales_invoice_customer,
      destField: ["id"],
    }),
  })
);
export const sales_invoice_customer_item_relationships = relationships(
  sales_invoice_customer_item,
  ({ one, many }) => ({
    customer: one({
      sourceField: ["customer_id"],
      destSchema: customer,
      destField: ["id"],
    }),
  })
);
export const sales_invoice_item_relationships = relationships(sales_invoice_item, ({ one, many }) => ({
  sales_invoice: one({
    sourceField: ["sales_invoice_id"],
    destSchema: sales_invoice,
    destField: ["id"],
  }),
  sales_invoice_product: one({
    sourceField: ["sales_invoice_product_id"],
    destSchema: sales_invoice_product,
    destField: ["id"],
  }),
}));
export const sales_invoice_product_relationships = relationships(sales_invoice_product, ({ one, many }) => ({
  customer: one({
    sourceField: ["customer_id"],
    destSchema: customer,
    destField: ["id"],
  }),
}));
export const sales_invoice_xml_relationships = relationships(sales_invoice_xml, ({ one, many }) => ({
  sales_invoice: one({
    sourceField: ["sales_invoice_id"],
    destSchema: sales_invoice,
    destField: ["id"],
  }),
}));
export const user_relationships = relationships(user, ({ one, many }) => ({
  customer: one({
    sourceField: ["active_customer_id"],
    destSchema: customer,
    destField: ["id"],
  }),
  organization: one({
    sourceField: ["organization_id"],
    destSchema: organization,
    destField: ["id"],
  }),
  role: one({
    sourceField: ["role_id"],
    destSchema: role,
    destField: ["id"],
  }),
}));
export const user_mobile_info_relationships = relationships(user_mobile_info, ({ one, many }) => ({
  user: one({
    sourceField: ["user_id"],
    destSchema: user,
    destField: ["id"],
  }),
}));
export const vat_breakdown_relationships = relationships(vat_breakdown, ({ one, many }) => ({
  purchase_invoice: one({
    sourceField: ["purchase_invoice_id"],
    destSchema: purchase_invoice,
    destField: ["id"],
  }),
  receipt: one({
    sourceField: ["receipt_id"],
    destSchema: receipt,
    destField: ["id"],
  }),
  sales_invoice: one({
    sourceField: ["sales_invoice_id"],
    destSchema: sales_invoice,
    destField: ["id"],
  }),
  vat_option: one({
    sourceField: ["vat_option_id"],
    destSchema: vat_option,
    destField: ["id"],
  }),
}));
