import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // How Hosting Works Section
          how_hosting_works: "HOW HOSTING WORKS?",
          apply_online_title: "Apply Online",
          apply_online_desc:
            "Fill out the quick application form with your property details.",
          site_review_title: "Site Review",
          site_review_desc:
            "Our team remotely evaluates your location (using photos + utility info you provide). We check if Level 2 or Level 3 is the best fit.",
          free_installation_title: "Free Installation",
          free_installation_desc:
            "If approved, we install the charger(s) at no cost to you. All equipment and setup are handled by Ancestro Charge.",
          start_earning_title: "Start Earning",
          start_earning_desc:
            "Your charger goes live, drivers start charging, and you collect a share of the profits every month.",

          // Ancestro Charge App Section
          ancestro_charge_app: "The Ancestro Charge App",
          automated_payments_title: "AUTOMATED PAYMENTS",
          automated_payments_desc:
            "Integrated with each charger for debit/credit card transactions. Drivers can pay instantly as a guest or sign up as members.",
          member_benefits_title: "MEMBER BENEFITS",
          member_benefits_desc:
            "Registered users enjoy discounts, loyalty perks, and priority charging options.",
          smart_charging_map_title: "SMART CHARGING MAP",
          smart_charging_map_desc:
            "Hosts’ locations are automatically listed in the app, guiding drivers in real time to your charger.",
          host_transparency_dashboard_title: "HOST TRANSPARENCY DASHBOARD",
          host_transparency_dashboard_desc:
            "Automated reports track charging sessions, total sales, and energy usage — so hosts know exactly how much they’re earning.",
          downtime_alerts_title: "DOWNTIME ALERTS",
          downtime_alerts_desc:
            "Any issue is flagged instantly. Our team responds fast to keep your charger online and earning.",

          // Global Presence Section
          global_presence_title:
            "FROM NORTHERN MEXICO TO SOUTHERN ARGENTINA, ANCESTRO CHARGE IS CONNECTING THE DOTS.",
          global_presence_desc:
            "Operating across 18 markets with consistent project origination and strategic oversight.",

          // Powered by Ancestro Ecosystem
          powered_by_ancestro: "Powered by the Ancestro Ecosystem",
          ancestro_energy: "ENERGY",
          ancestro_charge: "CHARGE",
          ancestro_protect: "PROTECT",
          ancestro_foundation: "FOUNDATION",
          ancestro_sustainable: "SUSTAINABLE",

          // Ready to Host Section
          ready_to_host: "Ready to Host an EV Charger?",
          apply_now: "APPLY NOW",
          apply_to_host: "APPLY TO HOST A CHARGER",

          // Language Toggle
          language_toggle: "Switch to Spanish",
          // HostWithCaseStudy Section
          host_charger_title:
            "HOST A CHARGER.<br />BE PART OF THE LARGEST EV<br />CHARGING NETWORK IN LATAM.",
          host_charger_desc:
            "Turn your location into a revenue generating charging hub with zero upfront investments.",
          why_host: "WHY HOST?",
          new_revenue_stream_title: "New Revenue Stream",
          new_revenue_stream_desc:
            "Earn a share of every charging session. Your location generates income 24/7 with zero cost to start.",
          more_traffic_title: "More Traffic",
          more_traffic_desc:
            "EV drivers search for charging stops. Hosting brings new customers directly to your business and keeps them on-site longer.",
          zero_investment_title: "Zero Investment",
          zero_investment_desc:
            "We cover equipment, installation, and all ongoing maintenance. You provide the space, and we handle the rest.",
          fully_insured_title: "Fully Insured by Ancestro Protect",
          fully_insured_desc:
            "All equipment is insured against damage, downtime, and accidents — so you host with complete peace of mind.",
          join_movement_title: "Join The Movement",
          join_movement_desc:
            "Be part of the largest EV charging network movement in LATAM. Ancestro handles everything: customer service, charger maintenance, and payment processing through the Ancestro Charge App.",

          // Footer Section
          footer_hosts: "HOSTS",
          footer_apply_to_host: "APPLY TO HOST",
          footer_how_it_works: "HOW IT WORKS",
          footer_app_features: "APP FEATURES",
          footer_dealers: "DEALERS",
          footer_dealer_application: "DEALER APPLICATION",
          footer_portal_login: "PORTAL LOGIN",
          footer_customers: "CUSTOMERS",
          footer_download_app: "DOWNLOAD APP",
          footer_find_a_charger: "FIND A CHARGER",
          footer_support: "SUPPORT",
          footer_investors: "INVESTORS",
          footer_investor_relations: "INVESTOR RELATIONS",
          footer_ancestro_capital: "ANCESTRO CAPITAL",
          footer_sustainability: "SUSTAINABILITY",
          footer_company: "COMPANY",
          footer_about: "ABOUT",
          footer_careers: "CAREERS",
          footer_contact: "CONTACT",
          footer_privacy_policy: "PRIVACY POLICY",
          footer_terms_of_service: "TERMS OF SERVICE",
          footer_all_rights_reserved:
            "ALL RIGHTS RESERVED. 2025 ANCESTRO CAPITAL",
          footer_buy_charger: "PREFER TO BUY A CHARGER? | CONTACT | LEGAL.",

          // ApplyModal Section
          apply_modal_step_label: "STEP",
          apply_modal_step_1: "CONTACT INFO",
          apply_modal_step_2: "BUSINESS SNAPSHOT",
          apply_modal_step_3: "BUSINESS PROFILE",
          apply_modal_step_4: "CHARGER PREFERENCE",
          apply_modal_step_5: "ADDITIONAL OPPORTUNITIES",
          apply_modal_step_6: "SUPPORTING MATERIALS",
          apply_modal_step_7: "THANK YOU",
          apply_modal_thanks: "THANKS FOR APPLYING!",
          apply_modal_thanks_desc:
            "OUR TEAM WILL REVIEW YOUR PROPERTY WITHIN 48 HOURS. IF YOUR SITE IS PRE-APPROVED, YOU’LL RECEIVE A LINK TO SCHEDULE A CALL.",
          apply_modal_submit: "SUBMIT NOW",
          apply_modal_submitting: "Submitting...",
          apply_modal_next: "NEXT",
          apply_modal_full_name: "FULL NAME",
          apply_modal_email: "EMAIL",
          apply_modal_phone: "PHONE NUMBER",
          apply_modal_business_name: "BUSINESS / ORGANIZATION NAME",
          apply_modal_property_address: "PROPERTY ADDRESS",
          apply_modal_property_address_hint: "(WITH GOOGLE MAPS PIN OPTION)",
          apply_modal_property_type: "Property Type",
          apply_modal_select_property_type: "Select Property Type",
          apply_modal_select_parkingavailability: "Select Availability",
          apply_modal_select_hours: "Select Hours",
          apply_modal_property_type_gas_station: "Gas Station",
          apply_modal_property_type_restaurant: "Restaurant / Café",
          apply_modal_property_type_shopping_mall: "Shopping Mall / Plaza",
          apply_modal_property_type_supermarket: "Supermarket / Grocery",
          apply_modal_property_type_hotel: "Hotel / Resort",
          apply_modal_property_type_office: "Office Building",
          apply_modal_property_type_residential: "Residential Complex",
          apply_modal_property_type_airport: "Airport",
          apply_modal_property_type_stadium: "Stadium / Sports Venue",
          apply_modal_property_type_government: "Government Building",
          apply_modal_property_type_hospital: "Hospital / Clinic",
          apply_modal_property_type_university: "University / School",
          apply_modal_property_type_parking: "Parking Garage / Lot",
          apply_modal_property_type_other: "Other",
          apply_modal_parking_availability:
            "Parking Availability Dedicated for Chargers / Spaces Available",
          apply_modal_covered: "Covered",
          apply_modal_uncovered: "Uncovered",
          apply_modal_public_access: "24/7 Public Access",
          apply_modal_yes: "Yes",
          apply_modal_no: "No",
          apply_modal_average_daily_visitors:
            "Average Daily Visitors / Customers",
            apply_modal_uploading: "Uploading...",
          apply_modal_hours_of_operation: "House of Operations",
          apply_modal_own_or_lease: "Do you Own or Lease this Property?",
          apply_modal_own: "Own",
          apply_modal_lease: "Lease",
          apply_modal_franchise: "Franchise",
          apply_modal_multiple_locations: "Do you Operate Multiple Locations?",
          apply_modal_multiple_locations_count: "How many & where",
          apply_modal_business_revenue: "ANNUAL BUSINESS REVENUE RANGE",
          apply_modal_business_revenue_hint:
            "Optional but helps gauge charger type suitability.",
          apply_modal_electrical_capacity: "EXISTING ELECTRICAL CAPACITY",
          apply_modal_electrical_capacity_hint:
            "Options: I know my kW service / I’m not sure.",
          apply_modal_utility_bill: "UPLOAD RECENT UTILITY BILL (OPTIONAL)",
          apply_modal_utility_bill_hint:
            "For faster review of electrical load.",
          apply_modal_charger_type_question:
            "WHICH CHARGER TYPE FITS YOUR LOCATION BEST?",
          apply_modal_charger_level_2: "Level 2",
          apply_modal_charger_level_2_desc:
            "(BEST FOR RESTAURANTS, OFFICES, RESIDENTIAL, SMALLER TRAFFIC LOCATIONS — 4–8 HOUR STAYS).",
          apply_modal_charger_level_3: "Level 3",
          apply_modal_charger_level_3_desc:
            "DC Fast (BEST FOR GAS STATIONS, MALLS, SUPERMARKETS, HIGHWAYS — HIGH-TRAFFIC, SHORT STAYS).",
          apply_modal_partnership_model: "PARTNERSHIP MODEL PREFERENCE:",
          apply_modal_partnership_zero_investment:
            "$0 INVESTMENT OPTION (STANDARD REVENUE SHARE).",
          apply_modal_partnership_invest:
            "WILLING TO INVEST AS A PARTNER FOR HIGHER REVENUE SHARE.",
          apply_modal_solar_question:
            "WOULD YOU LIKE US TO EVALUATE YOUR PROPERTY FOR A <span>$0 DOWN SOLAR SUBSCRIPTION</span> TO LOWER YOUR ENERGY BILLS AND INCREASE PROFITS?",
          apply_modal_solar_yes: "Yes",
          apply_modal_solar_no: "No",
          apply_modal_solar_maybe: "Maybe",
          apply_modal_property_photos:
            "UPLOAD PHOTOS OF PROPERTY EXTERIOR / PARKING AREA",
          apply_modal_property_photos_hint:
            "HELPS US VISUALIZE CHARGER PLACEMENT.",
          apply_modal_electrical_photos:
            "UPLOAD PHOTOS OF ELECTRICAL BREAKER / INFRASTRUCTURE",
          apply_modal_electrical_photos_hint:
            "Allows remote feasibility screening without physical inspection.",
          apply_modal_additional_notes: "ADDITIONAL NOTES",
          apply_modal_additional_notes_hint:
            "“Tell us why your property is a great fit to host EV chargers.”",
          apply_modal_project_portfolio: "UPLOAD YOUR PROJECT PORTFOLIO",
          apply_modal_upload: "Upload",
          apply_modal_file_format: "(PDF, JPEG/PNG)",
          apply_modal_file_format_gallery: "(PDF, JPEG/PNG gallery)",
          apply_modal_file_formSubmit: "Submit",
          apply_modal_required_field: "This field is required",
        },
      },
      es: {
        translation: {
          // How Hosting Works Section
          how_hosting_works: "¿CÓMO FUNCIONA EL ALOJAMIENTO?",
          apply_online_title: "Solicita en Línea",
          apply_online_desc:
            "Completa el formulario de solicitud rápido con los detalles de tu propiedad.",
          site_review_title: "Revisión del Sitio",
          site_review_desc:
            "Nuestro equipo evalúa remotamente tu ubicación (usando fotos e información de servicios públicos que proporciones). Verificamos si el Nivel 2 o Nivel 3 es el más adecuado.",
          free_installation_title: "Instalación Gratuita",
          free_installation_desc:
            "Si se aprueba, instalamos los cargadores sin costo para ti. Todo el equipo y la instalación son manejados por Ancestro Charge.",
          start_earning_title: "Comienza a Ganar",
          start_earning_desc:
            "Tu cargador entra en funcionamiento, los conductores comienzan a cargar y tú recibes una parte de las ganancias cada mes.",

          // Ancestro Charge App Section
          ancestro_charge_app: "La Aplicación Ancestro Charge",
          automated_payments_title: "PAGOS AUTOMATIZADOS",
          automated_payments_desc:
            "Integrado con cada cargador para transacciones con tarjeta de débito/crédito. Los conductores pueden pagar al instante como invitados o registrarse como miembros.",
          member_benefits_title: "BENEFICIOS PARA MIEMBROS",
          member_benefits_desc:
            "Los usuarios registrados disfrutan de descuentos, beneficios de lealtad y opciones de carga prioritaria.",
          smart_charging_map_title: "MAPA DE CARGA INTELIGENTE",
          smart_charging_map_desc:
            "Las ubicaciones de los anfitriones se listan automáticamente en la aplicación, guiando a los conductores en tiempo real a tu cargador.",
          host_transparency_dashboard_title:
            "PANEL DE TRANSPARENCIA PARA ANFITRIONES",
          host_transparency_dashboard_desc:
            "Informes automatizados rastrean las sesiones de carga, ventas totales y uso de energía, para que los anfitriones sepan exactamente cuánto están ganando.",
          downtime_alerts_title: "ALERTAS DE INACTIVIDAD",
          downtime_alerts_desc:
            "Cualquier problema se marca instantáneamente. Nuestro equipo responde rápidamente para mantener tu cargador en línea y generando ingresos.",

          // Global Presence Section
          global_presence_title:
            "DESDE EL NORTE DE MÉXICO HASTA EL SUR DE ARGENTINA, ANCESTRO CHARGE ESTÁ CONECTANDO LOS PUNTOS.",
          global_presence_desc:
            "Operando en 18 mercados con una originación de proyectos consistente y supervisión estratégica.",

          // Powered by Ancestro Ecosystem
          powered_by_ancestro: "Potenciado por el Ecosistema Ancestro",
          ancestro_energy: "ENERGÍA",
          ancestro_charge: "CARGA",
          ancestro_protect: "PROTEGER",
          ancestro_foundation: "FUNDACIÓN",
          ancestro_sustainable: "SOSTENIBLE",

          // Ready to Host Section
          ready_to_host:
            "¿Listo para Alojar un Cargador de Vehículos Eléctricos?",
          apply_now: "SOLICITA AHORA",
          apply_to_host: "SOLICITA ALOJAR UN CARGADOR",

          // Language Toggle
          language_toggle: "Cambiar a Inglés",

          // HostWithCaseStudy Section
          host_charger_title:
            "ALOJA UN CARGADOR.<br />SÉ PARTE DE LA RED DE CARGA DE VEHÍCULOS ELÉCTRICOS<br />MÁS GRANDE DE LATAM.",
          host_charger_desc:
            "Convierte tu ubicación en un centro de carga generador de ingresos sin inversiones iniciales.",
          why_host: "¿POR QUÉ ALOJAR?",
          new_revenue_stream_title: "Nueva Fuente de Ingresos",
          new_revenue_stream_desc:
            "Gana una parte de cada sesión de carga. Tu ubicación genera ingresos 24/7 sin costo inicial.",
          more_traffic_title: "Más Tráfico",
          more_traffic_desc:
            "Los conductores de vehículos eléctricos buscan paradas de carga. Alojar atrae nuevos clientes directamente a tu negocio y los mantiene en el lugar por más tiempo.",
          zero_investment_title: "Inversión Cero",
          zero_investment_desc:
            "Cubrimos el equipo, la instalación y todo el mantenimiento continuo. Tú proporcionas el espacio, nosotros nos encargamos del resto.",
          fully_insured_title: "Totalmente Asegurado por Ancestro Protect",
          fully_insured_desc:
            "Todo el equipo está asegurado contra daños, tiempos de inactividad y accidentes, para que alojes con total tranquilidad.",
          join_movement_title: "Únete al Movimiento",
          join_movement_desc:
            "Sé parte del movimiento de la red de carga de vehículos eléctricos más grande de LATAM. Ancestro se encarga de todo: servicio al cliente, mantenimiento de cargadores y procesamiento de pagos a través de la aplicación Ancestro Charge.",
          // Footer Section
          footer_hosts: "ANFITRIONES",
          footer_apply_to_host: "SOLICITA ALOJAR",
          footer_how_it_works: "CÓMO FUNCIONA",
          footer_app_features: "CARACTERÍSTICAS DE LA APLICACIÓN",
          footer_dealers: "DISTRIBUIDORES",
          footer_dealer_application: "SOLICITUD DE DISTRIBUIDOR",
          footer_portal_login: "INICIO DE SESIÓN EN EL PORTAL",
          footer_customers: "CLIENTES",
          footer_download_app: "DESCARGAR APLICACIÓN",
          footer_find_a_charger: "ENCUENTRA UN CARGADOR",
          footer_support: "SOPORTE",
          footer_investors: "INVERSORES",
          footer_investor_relations: "RELACIONES CON INVERSORES",
          footer_ancestro_capital: "ANCESTRO CAPITAL",
          footer_sustainability: "SOSTENIBILIDAD",
          footer_company: "EMPRESA",
          footer_about: "ACERCA DE",
          footer_careers: "CARRERAS",
          footer_contact: "CONTACTO",
          footer_privacy_policy: "POLÍTICA DE PRIVACIDAD",
          footer_terms_of_service: "TÉRMINOS DE SERVICIO",
          footer_all_rights_reserved:
            "TODOS LOS DERECHOS RESERVADOS. 2025 ANCESTRO CAPITAL",
          footer_buy_charger:
            "¿PREFIERES COMPRAR UN CARGADOR? | CONTACTO | LEGAL.",
          // ApplyModal Section
          apply_modal_step_label: "PASO",
          apply_modal_step_1: "INFORMACIÓN DE CONTACTO",
          apply_modal_step_2: "RESUMEN DEL NEGOCIO",
          apply_modal_step_3: "PERFIL DEL NEGOCIO",
          apply_modal_step_4: "PREFERENCIA DE CARGADOR",
          apply_modal_step_5: "OPORTUNIDADES ADICIONALES",
          apply_modal_step_6: "MATERIALES DE APOYO",
          apply_modal_step_7: "GRACIAS",
          apply_modal_thanks: "¡GRACIAS POR SOLICITAR!",
          apply_modal_uploading: "Subiendo...",
          apply_modal_thanks_desc:
            "NUESTRO EQUIPO REVISARÁ TU PROPIEDAD DENTRO DE LAS 48 HORAS. SI TU SITIO ES PREAPROBADO, RECIBIRÁS UN ENLACE PARA PROGRAMAR UNA LLAMADA.",
          apply_modal_submit: "ENVIAR AHORA",
          apply_modal_submitting: "Enviando...",
          apply_modal_next: "SIGUIENTE",
          apply_modal_full_name: "NOMBRE COMPLETO",
          apply_modal_email: "CORREO ELECTRÓNICO",
          apply_modal_phone: "NÚMERO DE TELÉFONO",
          apply_modal_business_name: "NOMBRE DEL NEGOCIO / ORGANIZACIÓN",
          apply_modal_property_address: "DIRECCIÓN DE LA PROPIEDAD",
          apply_modal_property_address_hint:
            "(CON OPCIÓN DE PIN DE GOOGLE MAPS)",
          apply_modal_property_type: "Tipo de Propiedad",
          apply_modal_select_property_type: "Seleccionar Tipo de Propiedad",
          apply_modal_select_parkingavailability: "Seleccionar Disponibilidad",
          apply_modal_select_hours: "Seleccionar Horas",
          apply_modal_property_type_gas_station: "Estación de Servicio",
          apply_modal_property_type_restaurant: "Restaurante / Cafetería",
          apply_modal_property_type_shopping_mall: "Centro Comercial / Plaza",
          apply_modal_property_type_supermarket:
            "Supermercado / Tienda de Abarrotes",
          apply_modal_property_type_hotel: "Hotel / Resort",
          apply_modal_property_type_office: "Edificio de Oficinas",
          apply_modal_property_type_residential: "Complejo Residencial",
          apply_modal_property_type_airport: "Aeropuerto",
          apply_modal_property_type_stadium: "Estadio / Lugar Deportivo",
          apply_modal_property_type_government: "Edificio Gubernamental",
          apply_modal_property_type_hospital: "Hospital / Clínica",
          apply_modal_property_type_university: "Universidad / Escuela",
          apply_modal_property_type_parking: "Estacionamiento / Lote",
          apply_modal_property_type_other: "Otro",
          apply_modal_parking_availability:
            "Disponibilidad de Estacionamiento Dedicado para Cargadores / Espacios Disponibles",
          apply_modal_covered: "Cubierto",
          apply_modal_uncovered: "Descubierto",
          apply_modal_public_access: "Acceso Público 24/7",
          apply_modal_yes: "Sí",
          apply_modal_no: "No",
          apply_modal_average_daily_visitors:
            "Visitantes / Clientes Diarios Promedio",
          apply_modal_hours_of_operation: "Casa de Operaciones",
          apply_modal_own_or_lease:
            "¿Eres Propietario o Arrendatario de esta Propiedad?",
          apply_modal_own: "Propietario",
          apply_modal_lease: "Arrendatario",
          apply_modal_franchise: "Franquicia",
          apply_modal_multiple_locations: "¿Operas Múltiples Ubicaciones?",
          apply_modal_multiple_locations_count: "Cuántas y dónde",
          apply_modal_business_revenue: "RANGO DE INGRESOS ANUALES DEL NEGOCIO",
          apply_modal_business_revenue_hint:
            "Opcional, pero ayuda a evaluar la idoneidad del tipo de cargador.",
          apply_modal_electrical_capacity: "CAPACIDAD ELÉCTRICA EXISTENTE",
          apply_modal_electrical_capacity_hint:
            "Opciones: Conozco mi servicio en kW / No estoy seguro.",
          apply_modal_utility_bill:
            "SUBIR FACTURA DE SERVICIOS RECIENTE (OPCIONAL)",
          apply_modal_utility_bill_hint:
            "Para una revisión más rápida de la carga eléctrica.",
          apply_modal_charger_type_question:
            "¿QUÉ TIPO DE CARGADOR SE ADAPTA MEJOR A TU UBICACIÓN?",
          apply_modal_charger_level_2: "Nivel 2",
          apply_modal_charger_level_2_desc:
            "(IDEAL PARA RESTAURANTES, OFICINAS, RESIDENCIALES, UBICACIONES CON MENOR TRÁFICO — ESTANCIAS DE 4–8 HORAS).",
          apply_modal_charger_level_3: "Nivel 3",
          apply_modal_charger_level_3_desc:
            "Carga Rápida DC (IDEAL PARA ESTACIONES DE SERVICIO, CENTROS COMERCIALES, SUPERMERCADOS, CARRETERAS — ALTO TRÁFICO, ESTANCIAS CORTAS).",
          apply_modal_partnership_model: "PREFERENCIA DE MODELO DE ASOCIACIÓN:",
          apply_modal_partnership_zero_investment:
            "OPCIÓN DE INVERSIÓN $0 (PARTICIPACIÓN ESTÁNDAR EN INGRESOS).",
          apply_modal_partnership_invest:
            "DISPUESTO A INVERTIR COMO SOCIO PARA UNA MAYOR PARTICIPACIÓN EN INGRESOS.",
          apply_modal_solar_question:
            "¿DESEAS QUE EVALUEMOS TU PROPIEDAD PARA UNA <span>SUSCRIPCIÓN SOLAR SIN INVERSIÓN INICIAL</span> PARA REDUCIR TUS FACTURAS DE ENERGÍA Y AUMENTAR TUS GANANCIAS?",
          apply_modal_solar_yes: "Sí",
          apply_modal_solar_no: "No",
          apply_modal_solar_maybe: "Tal vez",
          apply_modal_property_photos:
            "SUBIR FOTOS DEL EXTERIOR DE LA PROPIEDAD / ÁREA DE ESTACIONAMIENTO",
          apply_modal_property_photos_hint:
            "AYUDA A VISUALIZAR LA COLOCACIÓN DEL CARGADOR.",
          apply_modal_electrical_photos:
            "SUBIR FOTOS DEL DISYUNTOR ELÉCTRICO / INFRAESTRUCTURA",
          apply_modal_electrical_photos_hint:
            "Permite una evaluación de viabilidad remota sin inspección física.",
          apply_modal_additional_notes: "NOTAS ADICIONALES",
          apply_modal_additional_notes_hint:
            "“Cuéntanos por qué tu propiedad es ideal para alojar cargadores de vehículos eléctricos.”",
          apply_modal_project_portfolio: "SUBIR TU PORTAFOLIO DE PROYECTOS",
          apply_modal_upload: "Subir",
          apply_modal_file_format: "(PDF, JPEG/PNG)",
          apply_modal_file_format_gallery: "(PDF, galería JPEG/PNG)",
          apply_modal_required_field: "Este campo es obligatorio",
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["cookie", "localStorage", "navigator", "htmlTag"],
      caches: ["cookie"],
    },
  });

export default i18n;
