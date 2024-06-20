<template>
    <div class="container mt-4">
        <form @submit.prevent="Createcategory">
            <div class="row">
                <div class="col-md-6">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" v-model="category.name" placeholder="Username" aria-label="Username"
                            aria-describedby="basic-addon1">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="input-group mb-3">
                        <input type="date" class="form-control" v-model="category.date" placeholder="Username" aria-label="Username"
                            aria-describedby="basic-addon1">
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" v-model="category.description"></textarea>
                        <label for="floatingTextarea">Description</label>
                    </div>
                </div>
                <div class="col-12 mt-2">
                    <button type="submit" class="btn btn-primary">Save</button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            category:{ //name category
                name: "",
                date: "",
                description: ""   //mention the variable name for looping
            }
        }
    },
    methods: {
        async Createcategory() {
            await this.axios.post('/api/category/create',this.category).then(response=>{
                this.$router.push({ path: '/category' });
            }).catch(error=>{
                console.log(error)
                this.categories = []
            })
        }
    }
}
</script>