let db;
let dbReq = indexedDB.open('DataBase', 1);
dbReq.onupgradeneeded = (event) => {
    // Зададим переменной db ссылку на базу данных
    db = event.target.result;
    // Создадим хранилище объектов с именем notes.
    let users = db.createObjectStore('users', {autoIncrement: true});
};
dbReq.onsuccess = (event) => {
    db = event.target.result;
};
dbReq.onerror = (event) => {
    alert('error opening database ' + event.target.errorCode);
};


function save_account(db, name, password) {
    // Запустим транзакцию базы данных и получите хранилище объектов Notes
    let tx = db.transaction(['users'], 'readwrite');
    let store = tx.objectStore('users');
    // Добаляем заметку в хранилище объектов
    let account = {login: name, password: password};
    store.add(account);
    // Ожидаем завершения транзакции базы данных
    tx.oncomplete = () => {
        console.log('stored note!')
    };
    tx.onerror = (event) => {
        alert('error storing note ' + event.target.errorCode);
    }
};

dbReq.onsuccess = (event) => {
    db = event.target.result;
};