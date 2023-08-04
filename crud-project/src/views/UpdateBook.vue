<template>
    <h1 id="addTitle">Editar libro</h1>
    <section class="form">
        <div id="form-update">
            <form action="" class="field">
                <label class="label">El Conde de Montecristo</label>   <svg-icon type="mdi" :path="path" class="edit-icon" v-bind="props" @click="dialog = true"></svg-icon>

                <label class="label">Cien años de Soledad</label> <svg-icon type="mdi" :path="path"  class="edit-icon" @click="dialog = true"></svg-icon>

                <label class="label">Las Crónicas de Narnia: El León, La Bruja y El Ropero</label> <svg-icon type="mdi" :path="path"  class="edit-icon" @click="dialog = true"></svg-icon>
            </form>
            <v-dialog
                v-model="dialog"
                width="500px"
            >
            <v-card>
                <v-card-title id="titulo-tarjeta">Modificación de libro</v-card-title>
                <v-card-text>
                    <form action="" class="field" id="update-form">
                        <label class="label">Nombre: </label> <input class="input" type="text" required> 

                        <label class="label">Pequeña descripción: </label> <textarea class="textarea" required></textarea> 

                        <label class="label">Sinopsis: </label> <textarea class="textarea" required></textarea>

                        <label class="label">Precio: </label><input class="input" type="number" ondrop="return false;" onpaste="return false;" onkeypress="return (event.charCode>=48 && event.charCode<=57) || event.charCode==46" required>
                        
                        <label class="label">Imagen: </label> <input type="file" id="img-libro" name="img-libro" accept="image/png, image/jpeg" />
                    </form>
                </v-card-text>
                <v-card-actions>
                    <button class="buttons-update-dialog">Modificar</button>
                    <button class="buttons-update-dialog" @click="dialog = false">Cerrar</button>
                </v-card-actions>
            </v-card>
            </v-dialog>
        </div>
    </section>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiFileEdit } from '@mdi/js';

export default {
  name: 'UpdateView',
  components: {
    SvgIcon
  },
  data() {
    return {
       path: mdiFileEdit,
       dialog: false,
    }
  }
}
</script>

<style>
.edit-icon{
    margin-left: 65%;
}
.edit-icon:hover{
    cursor: pointer;
}
#titulo-tarjeta{
    background-color: #457a51;
    color: white;
    text-align: center;
}
#update-form{
    grid-template-columns: 100px 360px;  
    margin-left: 0%;  
}
.buttons-update-dialog{
    background-color: #457a51;
    color: white;
    margin-left: 50px;
    width: 150px;
    height: 30px;
    border-radius: 15px;
}
</style>