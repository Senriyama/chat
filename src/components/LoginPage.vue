<template>
  <div class="login">
    <va-card class="login-card">
      <img src="@/assets/chat-icon.svg" alt="Chat Icon" />
      <h2>Welcome to my chat app!</h2>
      <form @submit.prevent="onLogin" class="login-form">
        <div class="form-section">
        <va-input v-model="username" placeholder="Enter your username" />
        </div>
        <div class="form-section">
        <va-input type="password" v-model="password" placeholder="Enter your password" />
        </div>
        <div class="form-section">
        <VaButton type="submit" class="mr-6 mb-2" color="primary">Log In</VaButton>
        </div>
      </form>
      <div class="register-section">
      <VaBadge
      text="If you don't have an account yet..."
      color="#B3D943"
      class="mr-2"
      />
      </div>
      <VaButton color="danger" class="mr-6 mb-2" @click="goToRegister">Register</VaButton>
    </va-card>
  </div>
</template>


<script>
import dummyData from '@/dummyData'; // ダミーデータをインポート


export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    onLogin() {
      const user = dummyData.users.find(u => u.username === this.username && u.password === this.password);
      if (user) {
        // ログイン成功
        alert('ログインします、指示があるまでログアウトしないでください！！');
        localStorage.setItem('isLoggedIn', 'true');
        this.$root.loggedIn = true; // ルートインスタンスのデータを更新
        console.log("ログイン成功");
        this.$router.push('/home'); // ホームページに遷移
      } else {
        // ログイン失敗
        alert('ユーザー名またはパスワードが間違っています');
      }
    },
    goToRegister() {
      this.$router.push('/register');
    },
  }
}
</script>


<style>

.login img {
  width: 100px;
  /* アイコンの幅を設定 */
  height: auto;
  /* 高さを自動調整 */
  margin-bottom: 20px;
  /* フォームとの間隔を設定 */
}

.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-card {
  width: 300px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.login-form .form-section {
  margin-bottom: 10px; /* Adjust this value as needed */
}

.login-card .register-section {
  margin-bottom: 10px;
}

</style>

