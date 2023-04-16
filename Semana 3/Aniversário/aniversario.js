setInterval(() => {
  const d2 = "2023-03-28";
  const diffInMs = new Date(d2) - new Date();
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  if (diffInDays > 0) {
    console.log(`faltam ${diffInDays} dias`);
  } else {
    console.log("Seu aniversário chegou, Feliz aniversário!");
  }
}, 1000);
