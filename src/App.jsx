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

// ------------------------------------------------------------------------------------------------------------------------------------

import { useState } from "react"

function App() {

  // 1--> CAMPI CONTROLLATI, CREAZIONE DI OGNI STATO PER GLI INPUT (MILESTONE 1)
  const [fullName, setFullName] = useState("Stiven");
  const [username, setUsername] = useState("Hoxha");
  const [password, setPassword] = useState("boolean2025");
  const [specialization, setSpecialization] = useState("frontend");
  const [experienceYears, setExperienceYears] = useState("5");
  const [description, setDescription] = useState("Ciao, sono stiven, studente di boolean.");

  //3--> AL SUBMIT DEL FROM VERRA' ESEGUITA UNA FUNZIONE (MILESTONE 1)
  const handleSubmit = e => {
    e.preventDefault();
    // 4 --> CONTROLLO SE OGNI PROPRIETA' E' STATA INSERITA (MILESTON 1)
    if (
      !fullName.trim() ||
      !username.trim() ||
      !password.trim() ||
      !specialization.trim() ||
      !experienceYears.trim() ||
      experienceYears <= 0 ||
      !description.trim() 
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
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
        >
          <option value="Full stack">Full stack</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
        </select>
        <input
          type="number"
          placeholder="Anni di esperienza"
          value={experienceYears}
          onChange={(e) => setExperienceYears(e.target.value)}
        />
        <textarea
          cols={50}
          rows={20}
          placeholder="Descrizione"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        >
        </textarea>
        <button type="submit">Registrati</button>
      </form>
    </>
  )
}

export default App
