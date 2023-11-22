<template>
  <div
    class="h-screen bg-[#090b13] flex justify-center items-center"
  >
    <form
      action=""
      method="post"
      class="flex flex-col gap-4 items-center"
    >
      <div
        class="w-full py-4 pl-4 pr-8 border border-solid border-[#f9f9f9] flex items-center gap-4 rounded"
      >
        <Icon name="carbon:email" />
        <input
          type="email"
          autocomplete="off"
          placeholder="Email"
          class="bg-transparent outline-none"
        />
      </div>

      <div
        class="w-full py-4 pl-4 pr-8 border border-solid border-[#f9f9f9] flex items-center gap-4 rounded"
      >
        <Icon name="carbon:password" />
        <input
          type="password"
          autocomplete="off"
          placeholder="Password"
          class="bg-transparent outline-none"
        />
      </div>

      <button
        class="w-full py-4 pl-4 pr-8 border border-solid border-[#f9f9f9] flex items-center gap-4 rounded transition-all bg-[#f9f9f9] text-zinc-900 hover:border-transparent"
        @click="handleLogin"
      >
        <Icon name="carbon:login" />
        Login
      </button>
      <button
        class="w-full py-2 px-4 border border-solid border-[#f9f9f9] flex items-center gap-2 rounded transition-all hover:bg-[#f9f9f9] hover:text-black hover:border-transparent"
        @click="handleLogin"
      >
        <Icon name="uil:github" />
        Login With Github
      </button>
    </form>
  </div>
</template>

<script lang="ts" setup>
const supabase = useSupabaseClient();
const handleLogin = async () => {
  try {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${window.location.origin}/home`,
      },
    });
    if (error) throw error;
  } catch (error) {
    console.error(error);
  }
};
</script>

<style scoped></style>
