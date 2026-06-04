<template>
  <div>
    <ConfirmDialog :group="CONFIRM_DIALOG">
      <template #container="{ message, acceptCallback, rejectCallback }">
        <div
          class="flex flex-col items-center p-10 bg-white dark:bg-surface-950 rounded-3xl shadow-2xl border border-surface-100 dark:border-surface-800 animate-in zoom-in-95 duration-200"
        >
          <div
            class="rounded-full bg-primary/10 text-primary inline-flex justify-center items-center h-24 w-24 -mt-20 border-4 border-white dark:border-surface-950 shadow-xl"
          >
            <i class="pi pi-question !text-4xl"></i>
          </div>
          
          <h3 class="font-black text-2xl text-surface-900 dark:text-surface-0 mb-2 mt-6 tracking-tight">
            {{ message.header || 'Are you sure?' }}
          </h3>
          
          <p class="text-surface-500 dark:text-surface-400 text-center max-w-[300px] leading-relaxed mb-8">
            {{ message.message }}
          </p>
  
          <div class="flex items-center gap-3 w-full">
            <Button
              :label="message.rejectLabel ?? $t('btn.cancel')"
              @click="rejectCallback"
              severity="secondary"
              variant="outlined"
              class="flex-1 py-3 rounded-2xl font-bold border-surface-200 dark:border-surface-800"
            />
            <Button
              :label="message.acceptLabel ?? $t('btn.ok')"
              @click="acceptCallback"
              severity="primary"
              class="flex-1 py-3 rounded-2xl font-bold shadow-lg shadow-primary/20"
            />
          </div>
        </div>
      </template>
    </ConfirmDialog>
  
    <ConfirmPopup :group="CONFIRM_POPUP">
      <template #container="{ message, acceptCallback, rejectCallback }">
        <div class="p-5 bg-white dark:bg-surface-900 rounded-2xl shadow-xl border border-surface-100 dark:border-surface-800 max-w-[300px]">
          <div class="flex items-start gap-4 mb-5">
            <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
               <i :class="message.icon || 'pi pi-info-circle'" class="text-primary text-xl"></i>
            </div>
            <div class="flex flex-col gap-1">
              <span class="font-bold text-surface-900 dark:text-surface-0 leading-none">Confirm</span>
              <p class="text-xs text-surface-500 dark:text-surface-400 leading-normal">{{ message.message }}</p>
            </div>
          </div>
          
          <div class="flex items-center justify-end gap-2">
            <Button 
              :label="$t('btn.cancel')" 
              @click="rejectCallback" 
              size="small" 
              variant="text" 
              severity="secondary"
              class="rounded-lg font-bold"
            />
            <Button 
              :label="$t('btn.ok')" 
              @click="acceptCallback" 
              size="small" 
              severity="primary"
              class="rounded-lg font-bold px-4"
            />
          </div>
        </div>
      </template>
    </ConfirmPopup>
  </div>
</template>

<script setup lang="ts">
import { CONFIRM_DIALOG, CONFIRM_POPUP } from "~/config/constants";
</script>
