<template>
  <div
    class="relative hover:cursor-pointer"
    @click="handleShowDropDown"
  >
    {{ props.username }}
  </div>

  <div
    v-show="showDropdownMenu"
    class="absolute top-14 right-6 bg-[#131313] border border-solid border-[#97979757] rounded py-2 px-4 text-sm"
  >
    <ul>
      <li>
        <button
          class="whitespace-nowrap"
          @click="handleSignOut"
        >
          Sign Out
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const supabase = useSupabaseClient();

const props = defineProps<{
  username: string;
}>();

const showDropdownMenu = ref(false);

const handleShowDropDown = () => {
  showDropdownMenu.value = !showDropdownMenu.value;
};

const handleSignOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  } catch (error) {
    console.error(error);
  }
};
</script>

<style lang="scss" scoped></style>
