
import { InlineKeyboard } from 'grammy';

export const inlineOrder = new InlineKeyboard()
  .text(" - ", "minus")
  .text("1", "default")
  .text(" + ", "plus")
  .row()
  .text("📥 Savatga qo'shish", "addtolist");



