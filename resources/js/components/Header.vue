<template>
    <div class="container">
        <div class="row justify-content-center">
            <nav class="navbar navbar-expand-lg bg-dark bg-body-tertiary" data-bs-theme="dark">
                <div class="container-fluid">
                    <router-link class="navbar-brand" to="/">VueJs</router-link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <router-link  class="nav-link" to="/">Home</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/category">Category</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log('Header mounted.')
    }
}
</script>
