<template>
    <div class="container mt-4">
        <div class="card">
            <h1>Category Page</h1>
            <div class="card-body">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Category</th>
                            <th scope="col">Date</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody v-if="categories.length > 0">
                        <tr v-for="(category,key) in categories" :key="key">
                            <th scope="row">1</th>
                            <td>{{ category.name }}</td>
                            <td>{{ category.date}}</td>
                            <td><router-link class="btn btn-primary">Edit</router-link></td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr>
                            <td colspan="4" align="center">No Categories Found.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                categories:[]   //mention the variable name for looping
            }
        },
        mounted(){              //for after loading the page this will trigger
            this.getCategories()
        },
        methods:{
            async getCategories(){
                await this.axios.get('/api/category').then(response=>{
                    console.log(response);
                    this.categories = response.data
                }).catch(error=>{
                    console.log(error)
                    this.categories = []
                })
            },

            // categoryEdit(id){
            // :to='{name:"categoryEdit",params:{id:category.id}}'
            //     alert(id);
            // }
        }
    }
</script>