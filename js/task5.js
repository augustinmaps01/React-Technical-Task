
  
  $(document).ready(function() {
    $('#example').DataTable( {
        "ajax": "product.json",
        "columns": [
            { "products": "productName" },
            { "products": "price" },
            { "products": "manufacturer" },
            { "products": "category" },
            { "products": "productionDate" }
           
        ]
    } );
} );