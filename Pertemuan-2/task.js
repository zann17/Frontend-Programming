/**
 * TODO 1.
 * Buat array of object users (5 users).
 * Object memiliki property: name, age, major.
 * Note: Ubah var menggunakan JavaScript Modern.
 */
const user = [
  {
    name : "Fauzan Rahman Fadhillah",
    age : 21,
    major : "Teknik Informatika"
  },
  {
    name : "Lucas Modric",
    age : 24,
    major : "Bisnis Digital"
  },
  {
    name : "Benzema",
    age : 32,
    major : "Sistem Informasi"
  },
  {
    name : "Bani",
    age : 25,
    major : "Teknik Informatika"
  },
  {
    name : "Rizhul",
    age : 22,
    major : "Sistem Informasi"
  },
]

/**
 * TODO 2
 * Buat function all: Menampilkan semua data user.
 * Hint: Gunakan for/for-of.
 * Note: Ubah function menggunakan arrow function.
 */
const all = () => {
  for (const users of user){
    console.log(`Name: ${user.name}, Age: ${user.age}, Major: ${user.Major}`);
  }
};

/**
 * TODO 3
 * Buat function store: Menambahkan user baru.
 * Hint: Gunakan method push.
 * Note: Ubah function menggunakan arrow function.
 */
const store = (name, age, major) => {
  const newUser = { name, age,  major};
  user.push(newUser);
  console.log("User add successfully");
};

/**
 * TODO 4.
 * Buat function update: Mengedit data user.
 * Hint: re-assign array.
 * Note: Ubah function menggunakan arrow function.
 */
const update = (index, name, age, major) => {
  if (index < 0 || index >= user.length){
    console.log("Index Invalid");
  } else {
    user[index] = {name, age, major};
    console.log("User Update success")
  }
};

/**
 * TODO 5.
 * Buat function destroy: Menghapus data user.
 * Hint: Gunakan method splice.
 * Note: Ubah function menggunakan arrow function.
 */
function destroy(index) {
  user.splice(index, 3);
}

/**
 * Function main.
 * Jangan edit atau hapus function main.
 * Function ini untuk testing task.
 */

const main = () => {
  /**
   * Test function index
   */
  console.log("# Get All Users");
  all();

  /**
   * Test function store
   */
  console.log("# Add New User: Sabiq");
  const newUser = {
    name: "Sabiq",
    age: 20,
    major: "Informatics",
  };
  store(newUser);


  /**
   * Test function update
   */
  console.log("# Edit User: Isfa");
  const editedIndex = 1;
  const editedUser = {
    name: "Isfhani Ghiyath",
    age: 23,
    major: "English",
  };
  update(editedIndex, editedUser);

  /**
   * Test function destroy
   */
  console.log("# Delete User: Bani");
  const deletedIndex = 2;
  destroy(deletedIndex);
};

main();

/**
 * Jangan hapus exports.
 * Exports ini untuk tujuan testing.
 */
module.exports = { user, all, store, update, destroy };