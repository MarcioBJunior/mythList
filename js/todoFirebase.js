firebase.initializeApp(firebaseConfig);

const collection = "todo";

let db = firebase.firestore();

function addTask(task){
    console.log(collection);
    db.collection(collection).add(task);
            
}

function removeTask(task){

    db.collection(collection).delete(task);
        
}

function dataRefresh(callback){
     db.collection(collection).onSnapshot(callback);
}