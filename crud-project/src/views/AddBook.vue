<template>
    <h1 id="addTitle">Agregar libro</h1>
    <section class="form">
        <div>
            <form action="" class="field">
                <label class="label">Nombre: </label> <input class="input" type="text" required> 

                <label class="label">Pequeña descripción: </label> <textarea class="textarea" required></textarea> 

                <label class="label">Sinopsis: </label> <textarea class="textarea" required></textarea>

                <label class="label">Precio: </label><input class="input" type="number" ondrop="return false;" onpaste="return false;" onkeypress="return (event.charCode>=48 && event.charCode<=57) || event.charCode==46" required>
                
                <label class="label">Imagen: </label> <input type="file" id="img-libro" name="img-libro" accept="image/png, image/jpeg" />

                <input type="submit" value="Aceptar" class="save">
                <button class="delete">Borrar</button>
            </form>
        </div>
    </section>
</template>

<script>
export default {
  name: 'AddView',
}
</script>

<style>
    #addTitle{
        margin-top: 30px;
    }
    .field{
        display: grid;
        grid-template-columns: 200px 360px;
        margin-top: 45px;
        margin-left: 33%;
    }
    .label{
        text-align: left;
        margin-bottom: 20px;
        color: black;
        font-family: Arial, Helvetica, sans-serif;
    }
    .input, .textarea{
        margin-bottom: 20px;
        width: 350px;
        height: 30px;
    }
    .textarea{
        height: 50px;
    }
    .delete{
        margin-left: 65%;
    }
</style>