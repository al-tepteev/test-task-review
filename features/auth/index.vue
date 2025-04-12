<template>
    <section class="login-section min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-4">
            <div class="wrapper-header">
				<h2 class="text-2xl font-bold text-center mb-6 text-gray-800">Вход в аккаунт</h2>
			</div>
			<div class="wrapper-content">
				<BlockAuthForm />
			</div>
        </div>
    </section>
</template>

<script setup lang="ts">
import BlockAuthForm from "./components/Block/AuthForm/index.vue"
</script>