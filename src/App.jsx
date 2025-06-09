// 📌 Milestone 1: Creare un Form con Campi Controllati
// Crea un form di registrazione con i seguenti campi controllati (gestiti con useState):

// ✅ Nome completo (input di testo)

// ✅ Username (input di testo)

// ✅ Password (input di tipo password)

// ✅ Specializzazione (select con opzioni: "Full Stack", "Frontend", "Backend")

// ✅ Anni di esperienza (input di tipo number)

// ✅ Breve descrizione sullo sviluppatore (textarea)

// Aggiungi una validazione al submit, verificando che:

// Tutti i campi siano compilati
// L'input Anni di esperienza sia un numero positivo
// La Specializzazione sia selezionata

// Al submit, se il form è valido, stampa in console i dati.

//--------------------------------------------------------------------------------------------------------------------------------

// 📌 Milestone 2: Validare in tempo reale
// Aggiungere la validazione in tempo reale dei seguenti campi:

// ✅ Username: Deve contenere solo caratteri alfanumerici e almeno 6 caratteri (no spazi o simboli).

// ✅ Password: Deve contenere almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo.

// ✅ Descrizione: Deve contenere tra 100 e 1000 caratteri (senza spazi iniziali e finali).

// Suggerimento: Per semplificare la validazione, puoi definire tre stringhe con i caratteri validi e usare .includes() per controllare se i caratteri appartengono a una di queste categorie:

// const letters = "abcdefghijklmnopqrstuvwxyz";
// const numbers = "0123456789";
// const symbols = "!@#$%^&*()-_=+[]{}|;:'\\",.<>?/`~";
// Per ciascuno dei campi validati in tempo reale, mostrare un messaggio di errore (rosso) nel caso non siano validi, oppure un messaggio di conferma (verde) nel caso siano validi.

//--------------------------------------------------------------------------------------------------------------------------------

// 📌 Milestone 3: Convertire i Campi Non Controllati
// Non tutti i campi del form necessitano di essere aggiornati a ogni carattere digitato. Alcuni di essi non influenzano direttamente l’interfaccia mentre l’utente li compila, quindi è possibile gestirli in modo più efficiente.

// Analizza il form: Identifica quali campi devono rimanere controllati e quali invece possono essere non controllati senza impattare l’esperienza utente.
// Converti i campi non controllati: Usa useRef() per gestirli e recuperare il loro valore solo al momento del submit.
// Assicurati che la validazione continui a funzionare: Anche se un campo non è controllato, deve comunque essere validato correttamente quando l’utente invia il form.

// ------------------------------------------------------------------------------------------------------------------------------------

import { useMemo, useState, useRef } from "react"

// 5 --> UTILIZZO (MILESTONE 2)
const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

function App() {

  // 1--> CAMPI CONTROLLATI, CREAZIONE DI OGNI STATO PER GLI INPUT (MILESTONE 1)
  const [username, setUsername] = useState("Hoxha");
  const [password, setPassword] = useState("boolean2025");
  const [description, setDescription] = useState("Ciao, sono stiven, studente di boolean.");
  
  // 8 --> CAMPI NON CONTROLLATI (MILESTONE 3)
  // const [fullName, setFullName] = useState("Stiven");
  // const [specialization, setSpecialization] = useState("frontend");
  // const [experienceYears, setExperienceYears] = useState("5");
  const fullNameRef = useRef();
  const specializationRef = useRef();
  const experienceYearsRef = useRef();

  // 6 --> CREAZIONE DELLA VARIABILE CHE VIENE RICALCOLATA SOLO NEL CASO IN CUI CAMBIA USERNAME UTILIZZANDO USEMEMO VALIDAZIONE (MILESTONE 2)
  const isUsernameValid = useMemo(() => {
    //Deve contenere solo caratteri alfanumerici e almeno 6 caratteri (no spazi o simboli).
    // 7 --> CONTROLLARE SE I CARATTERI SONO VALIDI (MILESTONE 2)
    const charsValid = username.split("").every(char =>
      letters.includes(char.toLocaleLowerCase()) || numbers.includes(char)
    );
    return charsValid && username.trim().length >= 6;
  }, [username]);

  const isPasswordValid = useMemo(() => {
    //  Deve contenere almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo.
    return (
      password.trim().length >= 6 &&
      password.split("").some(pass => letters.includes(pass)) &&
      password.split("").some(pass => numbers.includes(pass)) &&
      password.split("").some(pass => symbols.includes(pass))
    );
  }, [password])

  const isDescriptionValid = useMemo(() => {
    // Deve contenere tra 100 e 1000 caratteri (senza spazi iniziali e finali).
    return description.trim().length >= 100 &&
      description.trim().length <= 1000;
  }, [description]);

  //3--> AL SUBMIT DEL FORM VERRA' ESEGUITA UNA FUNZIONE (MILESTONE 1)
  const handleSubmit = e => {
    e.preventDefault();

    // 9 --> RACCOGLIERE I VALORI NON CONTROLLATI (MILESTONE 3)
    const fullName = fullNameRef.current.value;
    const specialization = specializationRef.current.value;
    const experienceYears = experienceYearsRef.current.value;


    // 4 --> CONTROLLO SE OGNI PROPRIETA' E' STATA INSERITA (MILESTON 1)
    if (
      !fullName.trim() ||
      !username.trim() ||
      !password.trim() ||
      !specialization.trim() ||
      !experienceYears.trim() ||
      experienceYears <= 0 ||
      !description.trim() ||
      // 8 --> DOBBIAMO CONTROLLARE SE SONO VALIDE TRAMITE IL NOT ! (MILESTONE 2)
      !isUsernameValid ||
      !isPasswordValid ||
      !isDescriptionValid
    ) {
      alert("Errore: Compilare tutti i campi correttamente.");
      return;
    }
    console.log('Submit effettuato:', {
      fullName,
      username,
      password,
      specialization,
      experienceYears,
      description,
    });
  }

  return (
    <>
      {/* 2--> CREAZIONE DEL FORM E INPUT VARI (MILESTONE 1) */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome completo"
          // value={fullName}
          // onChange={(e) => setFullName(e.target.value)}
          ref={fullNameRef}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {/* 7 --> CREAZIONE DEL MESSAGGIO D'ERRORE E DELLA VALIDAZIONE (MILESTONE 2) */}
        {username.trim() && (
          <p style={{ color: isUsernameValid ? 'green' : 'red' }}>
            {isUsernameValid ? "Username valido" : "Deve avere almeno 6 caratteri alfanumerici"}
          </p>
        )}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* 7 --> CREAZIONE DEL MESSAGGIO D'ERRORE E DELLA VALIDAZIONE (MILESTONE 2) */}
        {password.trim() && (
          <p style={{ color: isPasswordValid ? 'green' : 'red' }}>
            {isPasswordValid ? "Password valida" : "Deve avere almeno 8 caratteri, 1 lettera, 1 numero, 1 simbolo"}
          </p>
        )}
        <select
          // value={specialization}
          // onChange={(e) => setSpecialization(e.target.value)}
          ref={specializationRef}
        >
          <option value="">Seleziona</option>
          <option value="Full stack">Full stack</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
        </select>
        <input
          type="number"
          placeholder="Anni di esperienza"
          // value={experienceYears}
          // onChange={(e) => setExperienceYears(e.target.value)}
          ref={experienceYearsRef}
        />
        <textarea
          cols={50}
          rows={20}
          placeholder="Descrizione"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {description.trim() && (
          <p style={{ color: isDescriptionValid ? 'green' : 'red' }}>
            {isDescriptionValid ? "Descrizione valida" : `Deve avere tra 100 e 100 caratteri (${description.trim().length})`}
          </p>
        )}
        
        <button type="submit">Registrati</button>
      </form>
    </>
  )
}

export default App
