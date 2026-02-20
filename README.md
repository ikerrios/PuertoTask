📊 PuertoTask

Aplicación web progresiva (PWA) orientada a la productividad personal, diseñada para centralizar en una sola plataforma la gestión de hábitos, estudio, finanzas y organización diaria.

ProductiveOS permite a cada usuario crear su propio sistema de seguimiento, medir su progreso y mejorar su rendimiento a lo largo del tiempo, todo desde una interfaz web instalable en el móvil sin necesidad de aplicaciones nativas.

🎯 Objetivo del proyecto

Desarrollar una plataforma multiusuario que permita:

Gestionar tareas y hábitos con repetición programada

Medir progreso mediante estadísticas y rachas

Organizar sesiones de estudio y objetivos de repaso

Controlar elementos planificados dentro de diferentes módulos

Acceder desde móvil, tablet u ordenador con sincronización por usuario

El proyecto está enfocado en combinar buenas prácticas de desarrollo web moderno con una arquitectura escalable y segura.

🧠 Concepto

En lugar de crear aplicaciones separadas (hábitos, estudio, finanzas…), ProductiveOS utiliza un núcleo común basado en:

Items programables

Horarios configurables

Registro diario de ejecución

Estadísticas calculadas en base a logs

Cada módulo adapta la visualización y reglas según su finalidad, manteniendo una arquitectura unificada.

🚀 Características principales

Registro e inicio de sesión multiusuario

Panel principal con módulos independientes

CRUD completo de elementos

Repetición por días o intervalos

Programación por horas

Etiquetas y prioridades

Historial y calendario

Estadísticas de progreso

Instalación como PWA en dispositivos móviles

🏗️ Stack tecnológico

Frontend:

React + Vite

PWA (instalable en móvil)

Gestión de estado moderna

Backend y base de datos:

Supabase (PostgreSQL + autenticación)

Políticas de seguridad por usuario (RLS)

🔐 Seguridad

Cada usuario solo puede acceder a su propia información mediante políticas de seguridad a nivel de base de datos.

📱 Acceso multiplataforma

Navegador móvil

Instalación como aplicación web

Ordenador

Tablet

No requiere dominio propio ni infraestructura de pago.

📈 Enfoque del desarrollo

El proyecto se está desarrollando por ciclos de issues, priorizando:

Base sólida

Seguridad y autenticación

Núcleo funcional estable

Experiencia de usuario

Escalabilidad futura