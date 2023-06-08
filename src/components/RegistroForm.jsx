import React, { useState } from 'react';
/* import axios from 'axios'; */


export default function RegistroForm() {

    const [formState, setFormState] = useState({
        especialidad: '',
        numeroMatricula: '',
        nombre: '',
        apellido: '',
        email: '',
        fechaNacimiento: '',
        genero: '',
        pass: '',
        pass2: '',
        DNI: '',
        telefono: '',
        terminos: '',
        images: [],
      });

/*       const handleVerUsuarios = () => {
        axios
          .post('http://innvita.com.ar/traerUsuarios')
          .then(response => console.log(response.data))
          .catch(error => console.error(error));
      }; */
    
      const handleInputChange = event => {
        const { name, value } = event.target;
        setFormState(prevState => ({
          ...prevState,
          [name]: value,
        }));
      };
    
      const handleFileChange = event => {
        const file = event.target.files[0];
        const name = event.target.getAttribute('data-name');
        setFormState(prevState => ({
          ...prevState,
          images: [...prevState.images, { name, file }],
        }));
      };
    
      const handleSubmit = event => {
        event.preventDefault();
    
/*         const formDataJson = {
            especialidad: formState.especialidad,
            numeroMatricula: formState.numeroMatricula,
            nombre: formState.nombre,
            apellido: formState.apellido,
            email: formState.email,
            fechaNacimiento: formState.fechaNacimiento,
            genero: formState.genero,
            pass: formState.pass,
            pass2: formState.pass2,
            DNI: formState.DNI,
            telefono: formState.telefono,
            terminos: formState.terminos,
            images: formState.images.map(image => ({
              name: image.name,
              file: image.file,
            })),
          }; */
          console.log('bueno ya se appendearon las imágenes y vamo a intentar el post', 'estas son las imagenes: ', )

      /*     axios
            .post('http://innvita.com.ar/efectores/crear', formDataJson, {
            })
            .then(response => console.log(response.data))
            .catch(error => console.error(error)); */
        };
          
          return (
              <form onSubmit={handleSubmit}>
                  <div className="board-row">
                      <label>
                          especialidad:
                          <input type="text" name="especialidad" value={formState.especialidad} onChange={handleInputChange}
                          />
                      </label>
                      <label>
                      numeroMatricula:
                          <input type="number" name="numeroMatricula" value={formState.numeroMatricula} onChange={handleInputChange}
                          />
                      </label>
                      <label>
                          nombre:
                          <input type="text" name="nombre" value={formState.nombre} onChange={handleInputChange}
                          />
                      </label>
                      <label>
                          apellido:
                          <input type="text" name="apellido" value={formState.apellido} onChange={handleInputChange}
                          />
                      </label>
                      <label>
                          email:
                          <input type="text" name="email" value={formState.email} onChange={handleInputChange}
                          />
                      </label>
                      <label>
                          fechaNacimiento:
                          <input type="text" name="fechaNacimiento" value={formState.fechaNacimiento} onChange={handleInputChange}
                          />
                      </label>
                      <label>
                          genero:
                          <input type="text" name="genero" value={formState.genero} onChange={handleInputChange}
                          />
                      </label>
                      <label>
                          pass:
                          <input type="password" name="pass" value={formState.pass} onChange={handleInputChange}
                          />
                      </label>
                      <label>
                          pass2:
                          <input type="password" name="pass2" value={formState.pass2} onChange={handleInputChange}
                          />
                      </label>
                      <label>
                          DNI:
                          <input type="text" name="DNI" value={formState.DNI} onChange={handleInputChange}
                          />
                      </label>
                      <label>
                          telefono:
                          <input type="text" name="telefono" value={formState.telefono} onChange={handleInputChange}
                          />
                      </label>
                      <label>
                          terminos:
                          <input type="text" name="terminos" value={formState.terminos} onChange={handleInputChange}
                          />
                      </label>
                      <label>
                          img:
                          <input type="file" data-name="img" onChange={handleFileChange}
                          />
                      </label>
                      <label>
                          matricula:
                          <input type="file" data-name="matricula" onChange={handleFileChange}
                          />
                      </label>
                      <label>
                          DNIFrontal:
                          <input type="file" data-name="DNIFrontal" onChange={handleFileChange}
                          />
                      </label>
                      <label>
                          DNI Dorsal:
                          <input type="file" data-name="DNIDorsal" onChange={handleFileChange}
                          />
                      </label>
                      <label>
                          titulo:
                          <input type="file" data-name="titulo" onChange={handleFileChange}
                          />
                      </label>
                      <label>
                          firma:
                          <input type="file" data-name="firma" onChange={handleFileChange}
                          />
                      </label>
                      <label>
                          poliza:
                          <input type="file" data-name="poliza" onChange={handleFileChange}
                          />
                      </label>
                      <label>
                      especialidadEfector:
                          <input type="file" data-name="especialidadEfector" onChange={handleFileChange}
                          />
                      </label>
                      <label>
                          certificado:
                          <input type="file" data-name="certificado" onChange={handleFileChange}
                          />
                      </label>
                      <button type="submit">Enviar</button>
                      <button type="button" /* onClick={handleVerUsuarios} */>Ver usuarios</button>
                  </div>
              </form>
          )
    }

      

