/**
 * Textos legales del sitio.
 *
 * Estructurados conforme a la Ley Federal de Protección de Datos Personales en
 * Posesión de los Particulares (LFPDPPP): artículo 16 y artículos 24, 29, 37 y 38
 * de su Reglamento.
 *
 * Los marcadores entre llaves son sustituidos en `LegalModal.astro`.
 *
 * IMPORTANTE: los datos de la empresa son ficticios y el texto es ilustrativo.
 * Antes de publicar el sitio, el aviso debe revisarse por asesoría legal y
 * adecuarse a la actividad real de la empresa y a sus proveedores.
 */

export interface LegalSection {
	title: string;
	body: string;
}

export interface LegalDictionary {
	trigger: string;
	title: string;
	close: string;
	ariaClose: string;
	lastUpdated: string;
	intro: string;
	sections: LegalSection[];
}

export const privacyEs: LegalDictionary = {
	trigger: 'Aviso de privacidad',
	title: 'Aviso de privacidad',
	close: 'Cerrar',
	ariaClose: 'Cerrar ventana de aviso de privacidad',
	lastUpdated: 'Última actualización: septiembre de 2026',
	intro:
		'El presente aviso de privacidad se rige por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y su Reglamento.',
	sections: [
		{
			title: 'Aviso de muestra',
			body: 'Este sitio es una página de demostración creada para visualizar cómo podría verse el proyecto real. Los datos de la empresa son ficticios y el texto legal de este aviso es ilustrativo: antes de publicar el sitio, el aviso deberá redactarse o revisarse por asesoría legal y adecuarse a la empresa, a su actividad y a los proveedores que realmente traten sus datos.',
		},
		{
			title: 'Responsable del tratamiento',
			body: '{legalName} (en adelante «{company}»), con domicilio en {address}, RFC {rfc}, es la persona responsable del tratamiento de los datos personales que se recaban a través de este sitio web, de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento. Puede contactar a nuestra persona responsable del tratamiento de datos en {privacyEmail} o al teléfono {phone}.',
		},
		{
			title: 'Datos personales que se recaban',
			body: 'Este sitio web recaba únicamente de forma voluntaria los siguientes datos personales: nombre, dirección de correo electrónico y contenido del mensaje que usted envía mediante el formulario de contacto. Si decide escribirnos o llamarnos directamente por WhatsApp o teléfono, también recibiremos el número telefónico y el nombre de su cuenta de mensajería, porque usted nos los proporciona de manera consciente. Este sitio web no solicita datos personales sensibles (religión, salud, orientación sexual, opinión política, afiliación sindical, ingresos, datos patrimoniales, financieros o biométricos).',
		},
		{
			title: 'Finalidades del tratamiento',
			body: 'Sus datos personales se utilizan exclusivamente para: (i) atender sus solicitudes de información y contacto; (ii) elaborar y enviar cotizaciones, presupuestos y propuestas comerciales; (iii) dar seguimiento a la relación comercial o contractual; (iv) atender dudas, quejas o aclaraciones; y (v) cumplir obligaciones legales, fiscales y contables. No utilizamos sus datos para fines distintos de los aquí descritos ni para decisiones automatizadas que produzcan efectos jurídicos en su contra.',
		},
		{
			title: 'Plazo de conservación',
			body: 'Sus datos personales se conservarán durante el tiempo necesario para cumplir las finalidades descritas. Las solicitudes de contacto que no derivan en una relación comercial se eliminarán en un plazo máximo de 12 meses contados a partir de la última comunicación. Los datos asociados a una relación comercial o contractual se conservarán por los plazos legales y contables aplicables, que en ningún caso serán menores a cinco años. Una vez concluidos los plazos señalados, los datos se bloquearán y, posteriormente, se eliminarán de forma segura.',
		},
		{
			title: 'Sitio sin servidor de datos',
			body: 'Este sitio web es estático y no cuenta con servidor de datos propio, base de datos, cookies ni herramientas de analítica o publicidad, por lo que no recaba datos personales de forma automática. La única información que se guarda en el navegador del usuario es su preferencia de tema (claro u oscuro), la cual no se transmite a ningún servidor. Los datos que usted captura voluntariamente en el formulario de contacto se integran en el propio navegador y se envían desde su programa de correo electrónico; llegan a {company} solo cuando usted decide enviarlos, de modo que este sitio web no los almacena.',
		},
		{
			title: 'Derechos ARCO',
			body: 'Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse (derechos ARCO) al tratamiento de sus datos personales, así como a revocar el consentimiento que haya otorgado. Para ejercer cualquiera de ellos, envíe su solicitud al correo {privacyEmail} con los siguientes datos: (i) nombre y domicilio o correo electrónico para dirigirle la respuesta; (ii) copia de su identificación oficial vigente como documento probatorio; y (iii) descripción clara y precisa de los datos respecto de los cuales busca ejercer el derecho y del derecho que desea ejercer. Su solicitud será atendida en un plazo máximo de 20 días hábiles contados a partir de su recepción. El ejercicio de los derechos ARCO es gratuito.',
		},
		{
			title: 'Manifestación de negativa',
			body: 'Si en su solicitud usted indica que no desea que sus datos sean tratados para alguna de las finalidades descritas, en particular que no desea recibir contacto de carácter comercial, {company} atenderá su negativa y cesará el tratamiento correspondiente, salvo que exista una obligación legal que exija conservarlos. En ese supuesto, la información se bloqueará y solo podrá mostrarse a la autoridad competente que la solicite.',
		},
		{
			title: 'Cláusula de consentimiento',
				body: 'Sus datos personales no se venden ni se comercializan. Conforme a los artículos 37 y 38 de la LFPDPPP, {company} podrá transferirlos sin requerir su consentimiento cuando la transferencia sea necesaria para atender sus solicitudes directas, para dar cumplimiento a obligaciones legales o a resoluciones de autoridad competente, o cuando se trate de transferir los datos a empresas que forman parte del mismo grupo empresarial. Cualquier otra transferencia se realizará únicamente con su consentimiento expreso. El destinatario de los datos únicamente podrá utilizarlos para las finalidades transferidas y deberá guardar confidencialidad respecto de ellos.',
		},
		{
			title: 'Transferencia de datos',
			body: 'Sus datos personales no se venden ni se comercializan. Conforme a los artículos 37 y 38 de la LFPDPPP, {company} podrá transferirlos sin requerir su consentimiento cuando la transferencia sea necesaria para atender sus solicitudes directas, para dar cumplimiento a obligaciones legales o a resoluciones de autoridad competente, o cuando se trate de transferir los datos a empresas que forman parte del mismo grupo empresarial. Cualquier otra transferencia se realizará únicamente con su consentimiento expreso. El destinatario de los datos únicamente podrá utilizarlos para las finalidades transferidas y deberá guardar confidencialidad respecto de ellos.',
		},
		{
			title: 'Servicios de terceros',
			body: 'Este sitio web interactúa con los siguientes servicios de terceros, cuyo tratamiento de datos se rige por los avisos de privacidad de cada proveedor: el mapa de ubicación se muestra mediante un marco incrustado (iframe) de OpenStreetMap (openstreetmap.org), cuyo servidor registra la dirección IP, el navegador y la página de referencia del visitante; los botones de WhatsApp (wa.me) y de Facebook (facebook.com) dirigen al usuario a servicios de Meta; y el enlace al portafolio del creador se abre en un dominio externo. Estos servicios se activan únicamente cuando el usuario visualiza el mapa o decide pulsar los enlaces, por lo que este sitio web no comparte datos personales con terceros por cuenta propia. Adicionalmente, los datos que usted captura en el formulario de contacto son enviados desde su propio programa de correo electrónico, por lo que también interviene el proveedor de correo electrónico que usted utilice.',
		},
		{
			title: 'Datos de menores de edad',
			body: 'Este sitio web está dirigido exclusivamente a personas mayores de edad y no recaba ni trata datos personales de menores de edad. Si tiene conocimiento de que un menor de edad nos proporcionó datos personales, favor de reportarlo a {privacyEmail} para que procedamos a su eliminación. Cualquier tratamiento que se realice con datos de menores de edad se otorgará únicamente con el consentimiento por escrito de quien ejerza la patria potestad o tutela, en los términos del artículo 14 de la LFPDPPP.',
		},
		{
			title: 'Seguridad de la información',
			body: 'Se implementan medidas administrativas, técnicas y físicas razonables para proteger los datos personales contra daño, pérdida, alteración, destrucción, uso o acceso no autorizado. Dado que este sitio web no almacena los datos en sus propios servidores, la seguridad del envío depende también de las medidas implementadas por el proveedor de correo electrónico utilizado por usted y por las medidas de seguridad de los servicios de terceros antes mencionados.',
		},
		{
			title: 'Responsabilidad del creador del sitio',
			body: 'El creador y desarrollador del sitio web no participa en el tratamiento de los datos personales, no se hace responsable de la información que los usuarios proporcionen a la empresa, ni de los problemas o controversias que puedan derivarse de su relación con la misma. Todo lo anterior se regula conforme a las leyes mexicanas vigentes.',
		},
		{
			title: 'Cambios al aviso de privacidad',
			body: 'El presente aviso puede ser modificado en cualquier momento. Si se realiza algún cambio, se publicará la versión vigente en este sitio web y se actualizará la fecha de última actualización indicada al inicio del aviso; la versión publicada prevalecerá sobre cualquier versión anterior.',
		},
	],
};

export const privacyEn: LegalDictionary = {
	trigger: 'Privacy notice',
	title: 'Privacy notice',
	close: 'Close',
	ariaClose: 'Close privacy notice window',
	lastUpdated: 'Last updated: September 2026',
	intro:
		'This privacy notice is governed by the Federal Law on Protection of Personal Data Held by Private Parties (LFPDPPP) and its Regulations.',
	sections: [
		{
			title: 'Sample notice',
			body: 'This site is a demonstration page created to show what the real project could look like. The company details are fictitious and the wording of this notice is illustrative: before publishing the site, the notice must be drafted or reviewed by legal counsel and adapted to the company, its activity and the providers that actually process the data.',
		},
		{
			title: 'Data controller',
			body: '{legalName} (hereinafter "{company}"), with registered address at {address}, tax ID {rfc}, is the data controller responsible for the processing of the personal data collected through this website, in accordance with the Federal Law on Protection of Personal Data Held by Private Parties (LFPDPPP) and its Regulations. You can contact our data protection contact at {privacyEmail} or by phone at {phone}.',
		},
		{
			title: 'Personal data we collect',
			body: 'This website voluntarily collects only the following personal data: name, email address and the content of the message you send through the contact form. If you choose to write to us or call us directly via WhatsApp or phone, we will also receive your phone number and your messaging account name, because you knowingly provide them to us. This website does not request sensitive personal data (religion, health, sexual orientation, political opinion, trade union affiliation, income, patrimonial, financial or biometric data).',
		},
		{
			title: 'Purposes of processing',
			body: 'Your personal data is used exclusively for: (i) handling your information and contact requests; (ii) preparing and sending quotes, budgets and commercial proposals; (iii) following up on the commercial or contractual relationship; (iv) answering questions, complaints or clarifications; and (v) complying with legal, tax and accounting obligations. We do not use your data for purposes other than those described here, nor for automated decisions that produce legal effects against you.',
		},
		{
			title: 'Retention period',
			body: 'Your personal data will be kept for as long as necessary to fulfil the purposes described above. Contact requests that do not lead to a commercial relationship will be deleted within a maximum of 12 months from the last communication. Data associated with a commercial or contractual relationship will be kept for the applicable legal and accounting periods, which in no case will be less than five years. Once the stated periods elapse, the data will be blocked and subsequently deleted securely.',
		},
		{
			title: 'Website without a data server',
			body: 'This website is static and has no data server of its own, no database, no cookies and no analytics or advertising tools, so it does not collect personal data automatically. The only information stored in the user\'s browser is the theme preference (light or dark), which is not transmitted to any server. The data you voluntarily enter in the contact form is assembled in the browser and sent from your own email client; it reaches {company} only when you decide to send it, so this website does not store it.',
		},
		{
			title: 'ARCO rights',
			body: 'You have the right to Access, Rectify, Cancel or Object (ARCO rights) to the processing of your personal data, as well as to revoke any consent you have given. To exercise them, send your request to {privacyEmail} with the following information: (i) name and address or email so we can send you the response; (ii) a copy of your current official identification as supporting document; and (iii) a clear and precise description of the data you wish to exercise the right over and the right you wish to exercise. Your request will be answered within a maximum of 20 business days from receipt. Exercising ARCO rights is free of charge.',
		},
		{
			title: 'Objection and withdrawal',
			body: 'If in your request you state that you do not want your data processed for any of the purposes described above, in particular that you do not want to receive commercial contact, {company} will honour your objection and stop the corresponding processing, unless a legal obligation requires the data to be kept. In that case, the information will be blocked and may only be disclosed to the competent authority that requests it.',
		},
		{
			title: 'Consent clause',
			body: 'Accepting this notice is not required in order to browse the site or view its public content. Processing of data for the purposes described is carried out with your consent, which you give by sending us your data. Your express, prior consent is required for any transfer of data that is not necessary for the purposes described, for processing sensitive personal data, and for any marketing processing. You may revoke your consent at any time in writing to {privacyEmail}, without affecting the lawfulness of the processing carried out before the revocation. If you decide not to give consent, you may still browse the site without restrictions.',
		},
		{
			title: 'Data transfers',
			body: 'Your personal data is neither sold nor commercialised. In accordance with articles 37 and 38 of the LFPDPPP, {company} may transfer it without requiring your consent when the transfer is necessary to handle your direct requests, to comply with legal obligations or orders from the competent authority, or when it concerns companies belonging to the same corporate group. Any other transfer will only be carried out with your express consent. The recipient may only use the data for the purposes transferred and must keep it confidential.',
		},
		{
			title: 'Third-party services',
			body: 'This website interacts with the following third-party services, whose data processing is governed by each provider\'s own privacy notice: the location map is displayed through an embedded frame (iframe) from OpenStreetMap (openstreetmap.org), whose server logs the visitor\'s IP address, browser and referrer page; the WhatsApp (wa.me) and Facebook (facebook.com) buttons take the user to Meta services; and the link to the creator\'s portfolio opens in an external domain. These services are only activated when the user views the map or chooses to click the links, so this website does not share personal data with third parties on its own. In addition, the data you enter in the contact form is sent from your own email client, so the email provider you use is also involved.',
		},
		{
			title: 'Data from minors',
			body: 'This website is exclusively aimed at adults and does not collect or process the personal data of minors. If you become aware that a minor has provided us with personal data, please report it to {privacyEmail} so we can delete it. Any processing of minors\' data will only take place with the written consent of whoever exercises parental authority or guardianship, in the terms of article 14 of the LFPDPPP.',
		},
		{
			title: 'Information security',
			body: 'Reasonable administrative, technical and physical measures are implemented to protect personal data against damage, loss, alteration, destruction, use or unauthorised access. Given that this website does not store data on its own servers, the security of the transmission also depends on the measures implemented by the email provider you use and by the security measures of the third-party services mentioned above.',
		},
		{
			title: 'Liability of the site creator',
			body: 'The creator and developer of the website does not take part in the processing of personal data, is not responsible for the information users provide to the company, nor for any problems or disputes arising from their relationship with it. All of the above is governed by the laws in force in Mexico.',
		},
		{
			title: 'Changes to the privacy notice',
			body: 'This notice may be modified at any time. If any change is made, the current version will be published on this website and the last-updated date shown at the beginning of the notice will be updated; the published version shall prevail over any previous version.',
		},
	],
};

/** Términos y Condiciones de uso del sitio. */
export const termsEs: LegalDictionary = {
	trigger: 'Términos y Condiciones',
	title: 'Términos y Condiciones',
	close: 'Cerrar',
	ariaClose: 'Cerrar ventana de términos y condiciones',
	lastUpdated: 'Última actualización: septiembre de 2026',
	intro:
		'Estos términos regulan el acceso y uso del sitio web de {company}. Al navegar por este sitio usted acepta las condiciones que se describen a continuación.',
	sections: [
		{
			title: 'Aviso de muestra',
			body: 'Estos términos tienen carácter ilustrativo y los datos de la empresa son ficticios. Antes de publicar el sitio, el texto debe revisarse por asesoría legal y adecuarse a la actividad real de la empresa.',
		},
		{
			title: 'Objeto y aceptación',
			body: 'El presente documento regula el acceso y uso del sitio web de {legalName} («{company}»), con domicilio en {address}, RFC {rfc}. Al navegar por este sitio, usted declara aceptar expresamente estos términos. Si no está de acuerdo con alguno de ellos, le pedimos no utilizar el sitio.',
		},
		{
			title: 'Naturaleza informativa del sitio',
			body: 'El contenido de este sitio web tiene carácter estrictamente informativo. Las descripciones de servicios, productos, procesos y buenas prácticas no constituyen una oferta contractual vinculante. Los precios, cantidades, plazos, materiales y especificaciones publicados son de referencia y pueden variar según la obra, la ubicación y las condiciones del mercado.',
		},
		{
			title: 'Cotizaciones y contrataciones',
			body: 'La información enviada a través del formulario de contacto, por WhatsApp, por teléfono o por correo electrónico no constituye por sí misma una cotización, un pedido ni un contrato. Toda cotización válida requiere un documento escrito firmado por ambas partes que precise el alcance de los trabajos, el precio, la vigencia de la propuesta, el calendario de obra, la forma y plazo de pago, las garantías aplicables y las exclusiones. Los servicios solo se contratan mediante el instrumento que {company} determine para cada caso.',
		},
		{
			title: 'Cuenta y uso del sitio',
			body: 'Este sitio es de acceso público y no requiere la creación de cuentas. El usuario se compromete a hacer un uso lícito del sitio, a no intentar acceder a áreas restringidas, a no introducir código malicioso y a no realizar comunicaciones masivas no solicitadas.',
		},
		{
			title: 'Propiedad intelectual',
			body: 'Todos los elementos de este sitio web —incluidos, entre otros, el texto, el diseño, la estructura, la lógica, los logotipos, las marcas, las fotografías, los videos y el código fuente— son propiedad de {company} o de sus licenciantes y se encuentran protegidos por la legislación aplicable en materia de propiedad intelectual. Queda prohibida su reproducción, total o parcial, sin autorización previa y por escrito. Se autoriza la reproducción de fragmentos con fines de referencia siempre que se cite la fuente y no se altere el contenido.',
		},
		{
			title: 'Contenido de terceros y enlaces',
				body: 'El sitio puede incluir enlaces a sitios web de terceros —incluidos OpenStreetMap, Meta (WhatsApp y Facebook) y dominios externos—, que se rigen por sus propios términos y avisos de privacidad. {company} no controla ni responde por dicho contenido, por su disponibilidad, exactitud o políticas de tratamiento de datos, y su inclusión no implica autorización ni respaldo.',
		},
		{
			title: 'Servicios de terceros',
			body: 'El mapa de ubicación se muestra mediante un marco incrustado (iframe) de OpenStreetMap, cuyo servidor registra la dirección IP, el navegador y la página de referencia del visitante. Los botones de WhatsApp y Facebook dirigen al usuario a servicios de Meta. El tratamiento de los datos que estos servicios realizan se rige por los avisos de privacidad de cada proveedor, que el usuario puede consultar antes de interactuar con ellos.',
		},
		{
			title: 'Información técnica, Exactitud y disponibilidad',
				body: 'El contenido de este sitio web tiene carácter estrictamente informativo. Las descripciones de servicios, productos, procesos y buenas prácticas no constituyen una oferta contractual vinculante. Los precios, cantidades, plazos, materiales y especificaciones publicados son de referencia y pueden variar según la obra, la ubicación y las condiciones del mercado.',
		},
		{
			title: 'Limitación de responsabilidad',
			body: '{company} no responderá por daños directa o indirectamente derivados de: (i) el uso del sitio o de la información publicada en él; (ii) la indisponibilidad del sitio o de servidores de terceros; (iii) decisiones tomadas exclusivamente con base en la información del sitio sin verificación profesional; (iv) obras ejecutadas por personas distintas de {company}; y (v) el uso indebido de la información contenida en el sitio. Para trabajos de construcción, {company} no se responsabiliza por los daños derivados del uso del sitio como sustituto de un estudio, proyecto ejecutivo, dictamen técnico o revisión profesional.',
		},
		{
			title: 'Protección de datos personales',
				body: 'El tratamiento de los datos personales que se recaban a través de este sitio web se realiza conforme a nuestro Aviso de privacidad, disponible en este mismo sitio y regulado por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares. Al utilizar este sitio, usted reconoce que ha leído y aceptado el Aviso de privacidad.',
		},
		{
			title: 'Modificaciones',
			body: '{company} puede modificar, actualizar o retirar en cualquier momento el contenido de estos términos sin previo aviso. La versión publicada en este sitio web será la única aplicable y prevalece sobre cualquier versión anterior. Si usted no acepta las modificaciones, debe dejar de utilizar el sitio.',
		},
		{
			title: 'Legislación aplicable y jurisdicción',
				body: '{company} se esforzará por mantener la información del sitio actualizada, exacta y completa, y por asegurar su disponibilidad. No obstante, no garantiza que el contenido esté libre de errores, que el sitio funcione de manera ininterrumpida ni que esté exento de virus o componentes dañinos. Los precios, existencias, promociones, plazos y características de los productos y servicios pueden cambiar sin previo aviso; la información vigente al momento de la contratación es la que prevalece.',
		},
		{
			title: 'Contacto',
				body: 'Para cualquier duda relacionada con estos términos y condiciones, puede comunicarse con nosotros al correo {privacyEmail}, al teléfono {phone} o en nuestro domicilio en {address}.',
		},
	],
};

export const termsEn: LegalDictionary = {
	trigger: 'Terms and Conditions',
	title: 'Terms and Conditions',
	close: 'Close',
	ariaClose: 'Close terms and conditions window',
	lastUpdated: 'Last updated: September 2026',
	intro:
		'These terms govern access to and use of the {company} website. By browsing this site you accept the conditions described below.',
	sections: [
		{
			title: 'Sample document',
			body: 'These terms are illustrative in nature and the company details are fictitious. Before publishing the site, the text must be reviewed by legal counsel and adapted to the company\'s real activity.',
		},
		{
			title: 'Purpose and acceptance',
			body: 'This document regulates access to and use of the website of {legalName} ("{company}"), with registered address at {address}, tax ID {rfc}. By browsing this site you expressly accept these terms. If you do not agree with any of them, please do not use the site.',
		},
		{
			title: 'Informative nature of the site',
			body: 'The content of this website is strictly informative. Descriptions of services, products, processes and best practices do not constitute a binding contractual offer. Published prices, quantities, deadlines, materials and specifications are for reference only and may vary depending on the works, the location and market conditions.',
		},
		{
			title: 'Quotes and contracting',
			body: 'Information sent through the contact form, by WhatsApp, by phone or by email does not in itself constitute a quote, an order or a contract. Any valid quote requires a written document signed by both parties stating the scope of the works, the price, the validity period of the proposal, the works schedule, the form and term of payment, the applicable warranties and the exclusions. Services are only contracted through the instrument that {company} determines in each case.',
		},
		{
			title: 'Site use',
			body: 'This site is publicly accessible and does not require the creation of accounts. The user undertakes to make lawful use of the site, not to attempt to access restricted areas, not to introduce malicious code and not to carry out unsolicited mass communications.',
		},
		{
			title: 'Intellectual property',
			body: 'All elements of this website —including, among others, the text, design, structure, logic, logos, trademarks, photographs, videos and source code— are the property of {company} or its licensors and are protected by the applicable intellectual property legislation. Total or partial reproduction without prior written authorisation is prohibited. Reproduction of excerpts for reference purposes is permitted provided the source is cited and the content is not altered.',
		},
		{
			title: 'Third-party content and links',
			body: 'The site may include links to third-party websites —including OpenStreetMap, Meta (WhatsApp and Facebook) and external domains— which are governed by their own terms and privacy notices. {company} neither controls nor is responsible for such content, its availability, accuracy or data processing policies, and its inclusion implies no endorsement or authorisation.',
		},
		{
			title: 'Third-party services',
			body: 'The location map is displayed through an embedded frame (iframe) from OpenStreetMap, whose server logs the visitor\'s IP address, browser and referrer page. The WhatsApp and Facebook buttons take the user to Meta services. The processing of data by these services is governed by each provider\'s privacy notice, which the user can consult before interacting with them.',
		},
		{
			title: 'Technical information, accuracy and availability',
			body: '{company} will endeavour to keep the information on the site up to date, accurate and complete, and to ensure its availability. Nevertheless, it does not guarantee that the content is free of errors, that the site operates uninterrupted, or that it is free of viruses or harmful components. Prices, availability, promotions, deadlines and product or service features may change without notice; the information in force at the time of contracting shall prevail.',
		},
		{
			title: 'Limitation of liability',
			body: '{company} shall not be liable for direct or indirect damages arising from: (i) use of the site or of the information published on it; (ii) unavailability of the site or of third-party servers; (iii) decisions taken solely on the basis of the site\'s information without professional verification; (iv) works carried out by parties other than {company}; and (v) improper use of the information contained on the site. For construction works, {company} accepts no liability for damages arising from use of the site as a substitute for a study, executive design, technical opinion or professional review.',
		},
		{
			title: 'Personal data protection',
			body: 'Processing of the personal data collected through this website is carried out in accordance with our Privacy notice, available on this site and governed by the Federal Law on Protection of Personal Data Held by Private Parties. By using the site, you acknowledge that you have read and accepted the Privacy notice.',
		},
		{
			title: 'Modifications',
			body: '{company} may modify, update or remove the content of these terms at any time without prior notice. The version published on this website shall be the only applicable one and shall prevail over any previous version. If you do not accept the modifications, you must stop using the site.',
		},
		{
			title: 'Governing law and jurisdiction',
			body: 'Use of this website is governed by the laws in force in the United Mexican States, in particular the LFPDPPP, the Federal Consumer Protection Law and the legislation applicable to construction and civil works. For any dispute, the parties expressly submit to the applicable laws and to the jurisdiction of the competent courts of {address}, waiving any other venue that may correspond to them by reason of their present or future addresses.',
		},
		{
			title: 'Contact',
			body: 'For any questions about these terms and conditions, you can contact us at {privacyEmail}, by phone at {phone}, or at our registered address at {address}.',
		},
	],
};
