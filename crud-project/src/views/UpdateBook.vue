<template>
    <h1 id="addTitle">Editar libro</h1>
    <section class="form">
        <div id="form-delete">
            <form action="" class="field">
                <label class="label">El Conde de Montecristo</label>  <v-icon>mdi-checkbox-marked-circle</v-icon>

                <label class="label">Cien años de Soledad</label> <input type="checkbox" name="check" class="check-delete">

                <label class="label">Las Crónicas de Narnia: El León, La Bruja y El Ropero</label> <input type="checkbox" name="check" class="check-delete">
            </form>
            
            <button class="delete" id="delete-books-button">Borrar</button>
        </div>
    </section>
</template>

<script>
export default {
  name: 'UpdateView',
}
</script>