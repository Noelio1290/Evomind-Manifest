import React from "react"
import { Paper, Container, Typography, Box } from "@mui/material";
import FondoEvo from '../FondoEvo.jpg'

const Main = () => {
 return(
  <Paper 
    sx={{
      width: '100%',  // 100% del ancho del viewport
      minWidth: '99wH',
      height: '100%', // 95vh de la altura del viewport
      minHeight: '97vH',
      overflow: 'hidden', // Asegura que la imagen no sobresalga
      position: 'relative', // Asegura que los elementos secundarios se posicionen relativos a este contenedor
    }}
  >
    <img
      src={FondoEvo}
      alt=""
      style={{
        objectFit: 'cover',
        width: '100vW', // Cubre todo el ancho del contenedor
        height: '100%', // Cubre toda la altura del contenedor
        position: 'absolute', // Posiciona la imagen absolutamente dentro del contenedor
        opacity: '0.3' // Cambia la opacidad para que parezca una marca de agua
      }}
    />
    <Container
     sx={{
      display: 'flex',
      flexFlow: 'column',
      alignItems: 'center',
      padding: '1em',
     }}
    >
      <Typography variant="h1" sx={{ textAlign: 'center', fontSize: '2em', color: 'black', padding: '1em', }}>
        EVOMIND: Transformando mentes para construir el futuro
      </Typography>
      <Box>
      <Typography variant="body1" gutterBottom sx={{ color: 'black', }}>
        En EvoMind, creemos en el poder del conocimiento y la evolución mental como fuerzas transformadoras de la sociedad. Nuestro compromiso es con la formación rápida y efectiva de profesionales de alta calidad, capaces de enfrentar los desafíos más complejos de nuestro tiempo. Nos enfocamos en la salud física y mental, el pensamiento crítico, y el desarrollo de habilidades prácticas que permiten generar ingresos de manera justa y remunerada.
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ color: 'black', }}>
        Nuestra Misión
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ color: 'black', }}>
        Empoderar a individuos a través de la educación intensiva y el pensamiento crítico, proporcionando las herramientas necesarias para alcanzar sus objetivos más ambiciosos. Nos dedicamos a la creación de una comunidad sólida y alineada, donde cada miembro puede crecer y lograr más de lo que jamás imaginó posible.
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ color: 'black', }}>
        Nuestros Principios
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ color: 'black', }}>
        -Transformación de la Consciencia:
        Promovemos la evolución personal mediante la mejora continua de la salud física y mental.
        Fomentamos el pensamiento crítico como base para la toma de decisiones informadas y éticas.
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ color: 'black', }}>
        -Desarrollo de Habilidades:
        Implementamos programas educativos intensivos que permiten a nuestros miembros adquirir habilidades técnicas y profesionales en un tiempo récord.
        Facilitamos el uso justo y remunerado del conocimiento, generando oportunidades para ingresos sostenibles y justos.
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ color: 'black', }}>
        -Colaboración y Comunidad:
        Creemos en la fuerza del trabajo en equipo y en la colaboración para alcanzar metas difíciles.
        Nuestra comunidad se basa en principios de apoyo mutuo, gestión emocional y respeto, creando un entorno donde todos pueden prosperar.
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ color: 'black', }}>
        -Innovación y Liderazgo:
        Nos esforzamos por estar a la vanguardia del desarrollo tecnológico y la innovación.
        Formamos líderes capaces de enfrentar los retos del mundo moderno con integridad y creatividad.
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ color: 'black', }}>
        Nuestro Compromiso
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ color: 'black', }}>
        En EvoMind, no solo soñamos con un futuro mejor, lo construimos. Día a día, trabajamos para hacer posible lo imposible, mejorando continuamente y buscando soluciones innovadoras para los problemas más desafiantes. Juntos, transformamos nuestras mentes para transformar el mundo.
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ color: 'black', }}>
        Únete a Nosotros
      </Typography>
      <Typography variant="body1">
        EvoMind no es solo una empresa, es un movimiento que busca unirnos a todos para trabajar juntos en nuestros sueños. Trabajamos juntos para superar los límites de lo posible, mejorando continuamente y encontrando soluciones innovadoras a los desafíos más complejos. En EvoMind, cada miembro tiene la oportunidad de crecer, aprender y contribuir a un mundo mejor. Nos esforzamos por liderar en el desarrollo tecnológico y la innovación, formando líderes íntegros y creativos, preparados para enfrentar los retos del mundo moderno. Aquí, no solo imaginamos un futuro mejor, lo construimos juntos.
      </Typography>
      </Box>
    </Container>
  </Paper>
 )
};

export default Main;