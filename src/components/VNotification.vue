<template>
	<v-snackbar v-model="isVisible" :color="color" :timeout="3000" absolute top right>
		{{ message }}
	</v-snackbar>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
	data() {
		return {
			isVisible: false,
			notification: null,
		}
	},
	computed: {
		color() {
			return this.notification?.color ?? ''
		},
		message() {
			return this.notification?.message ?? ''
		},
	},
	watch: {
		isVisible: {
			handler() {
				if (!this.isVisible) {
					this.setNotification(null)
				}
			},
		},
		deep: true,
	},
	created() {
		this.$store.subscribe((mutation, state) => {
			if (mutation.type === 'notification/setNotification') {
				this.notification = state.notification.notification
				this.isVisible = true
			}
		})
	},
	methods: {
		...mapMutations('notification', ['setNotification']),
	},
}
</script>
