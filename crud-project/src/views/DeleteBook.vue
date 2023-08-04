<template>
    <h1 id="addTitle">Eliminar libro</h1>
    <section class="form">
        <div id="form-delete">
            <form action="" class="field">
                <label class="label">El Conde de Montecristo</label> <input type="checkbox" name="check" class="check-delete">

                <label class="label">Cien años de Soledad</label> <input type="checkbox" name="check" class="check-delete">

                <label class="label">Las Crónicas de Narnia: El León, La Bruja y El Ropero</label> <input type="checkbox" name="check" class="check-delete">
            </form>
            
            <button class="delete" id="delete-books-button">Borrar</button>
        </div>
    </section>
</template>

<script>
export default {
  name: 'DeleteView',
}
</script>

<style>
.check-delete{
    width: 20px;
    height: 20px;
    margin-left: 65%;
}

#form-delete form{
    grid-template-columns: 200px 200px;
    margin-left: 37%;
}

#delete-books-button{
    margin-left: 1%;
}

</style>