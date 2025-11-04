const cotizacion = {
    economico: {
        valor:"$70.000",
        esencial:{
            nombre:"plan economico",
            descripcion: "breve descripcion del plan como tal",
            espacios:"1",
        },
        agregado:{
            asesoria:"se orienta al cliente sobre como rediseniar su espacio",        
            visita:"si",
            reunionOnline:"1 reunion online",
            plano3D: "no",
            moodBoard:"si",
            listadoMateriales:"si"
        }
    },
    medio: {
        valor:"$150.000",
        esencial:{
            nombre:"plan completo",
            descripcion: "breve descripcion del plan como tal",
            espacios:"2 a 3",
        },
        agregado:{
            asesoria:"se orienta al cliente sobre como rediseniar su espacio",
            visita:"si",
            reunionOnline:"2 reunion online",
            plano3D: "si",
            moodBoard:"si",
            listadoMateriales:"si"
        }
    },
    premium: {
        valor:"$265.000",
        esencial:{
            nombre:"plan premium",
            descripcion: "breve descripcion del plan como tal",
            espacios:"Hogar completo",
        },
        agregado:{
            asesoria:"se orienta al cliente sobre como rediseniar su espacio",
            visita:"si",
            reunionOnline:"a medida que se requiera",
            plano3D: "si",
            moodBoard:"si",
            listadoMateriales:"si"
        }
    }
};

export default cotizacion;