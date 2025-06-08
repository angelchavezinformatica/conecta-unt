<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

interface Props {
  title: string;
}
defineProps<Props>();

import Tabs from "primevue/tabs";
import TabList from "primevue/tablist";
import Tab from "primevue/tab";
import TabPanels from "primevue/tabpanels";
import TabPanel from "primevue/tabpanel";

const role = {
  CLIENT: "CLIENT",
  UNIVERSITY: "UNIVERSITY",
} as const;

type RoleT = keyof typeof role;

const route = useRoute();
const router = useRouter();

const userRole = ref<RoleT>("CLIENT");

const getRoleFromQuery = (query: any): RoleT => {
  const val = String(query?.tab || "").toUpperCase();
  return val === "UNIVERSITY" ? "UNIVERSITY" : "CLIENT";
};

const changeTab = (tab: RoleT) => {
  if (tab !== userRole.value) {
    userRole.value = tab;
    router.replace({ path: route.path, query: { tab: tab.toLowerCase() } });
  }
};

onMounted(() => {
  userRole.value = getRoleFromQuery(route.query);
});

watch(
  () => route.query.tab,
  (newTab) => {
    const validTab = getRoleFromQuery({ tab: newTab });
    if (validTab !== userRole.value) userRole.value = validTab;
  }
);
</script>

<template>
  <main class="flex flex-col items-center justify-center w-full">
    <section class="flex flex-col items-center justify-center w-[320px] gap-4">
      <div class="flex items-center justify-center w-[200px] h-[200px]">
        <NuxtImg
          src="/logo.png"
          alt="Universidad Nacional de Trujillo Logo"
          width="200"
          height="200"
        />
      </div>

      <h1 class="text-3xl">{{ title }}</h1>

      <Tabs :value="userRole">
        <TabList>
          <Tab :value="role.CLIENT" @click="changeTab(role.CLIENT)">
            Cliente / Empresa
          </Tab>
          <Tab :value="role.UNIVERSITY" @click="changeTab(role.UNIVERSITY)">
            Estudiante / Docente
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel :value="role.CLIENT">
            <slot name="client" />
          </TabPanel>
          <TabPanel :value="role.UNIVERSITY">
            <slot name="university" />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </section>
  </main>
</template>
