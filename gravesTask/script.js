
const graves = [
    {
        id: 1,
        name: "Hammam",
        DOB: "1993-03-28",
        DOD: "2023-10-28",
        section: "A",
        graveNumber: 1,
        visitors: [
            {name: "Ala'a", date: "2025-10-28"},
            {name: "Wala'a", date: "2025-10-28"}
        ]
    },
    {
        id: 2,
        name: "Ala'a",
        DOB: "1993-03-28",
        DOD: "2023-10-28",
        section: "A",
        graveNumber: 2,
        visitors: [
            {name: "Doa'a", date: "2025-10-28"},
            {name: "Sham", date: "2025-10-28"}
        ]
    },
    { id: 3, name: "Omar", DOB: "1948-05-14", DOD: "2015-02-03", section: "A", graveNumber: 3, visitors: [] },
    { id: 4, name: "Layla", DOB: "1962-09-22", DOD: "2016-06-17", section: "A", graveNumber: 4, visitors: [{name: "Samira", date: "2017-01-01"}] },
    { id: 5, name: "Youssef", DOB: "1955-01-08", DOD: "2017-11-29", section: "A", graveNumber: 5, visitors: [{name: "Nadia", date: "2018-01-01"}, {name: "Karim", date: "2018-01-01"}] },
    { id: 6, name: "Mariam", DOB: "1971-07-11", DOD: "2018-04-05", section: "A", graveNumber: 6, visitors: [{name: "Hadi", date: "2019-01-01"}, {name: "Rana", date: "2019-01-01"}, {name: "Tariq", date: "2019-01-01"}] },
    { id: 7, name: "Zaid", DOB: "1943-12-03", DOD: "2019-08-21", section: "A", graveNumber: 7, visitors: [{name: "Salma", date: "2020-01-01"}, {name: "Nabil", date: "2020-01-01"}, {name: "Hanan", date: "2020-01-01"}, {name: "Faris", date: "2020-01-01"}] },
    { id: 8, name: "Rima", DOB: "1980-04-26", DOD: "2020-01-14", section: "A", graveNumber: "", visitors: [{name: "Amal", date: "2021-01-01"}, {name: "Bassam", date: "2021-01-01"}, {name: "Dina", date: "2021-01-01"}, {name: "Khaled", date: "2021-01-01"}, {name: "Lina", date: "2021-01-01"}] },
    { id: 9, name: "Fadi", DOB: "1959-02-19", DOD: "2021-09-30", section: "A", graveNumber: 9, visitors: [{name: "Muna", date: "2022-01-01"}, {name: "Rami", date: "2022-01-01"}, {name: "Jana", date: "2022-01-01"}, {name: "Sami", date: "2022-01-01"}, {name: "Nour", date: "2022-01-01"}, {name: "Adel", date: "2022-01-01"}] },
    { id: 10, name: "Nour", DOB: "1968-06-06", DOD: "2022-03-12", section: "A", graveNumber: 10, visitors: [{name: "Rasha", date: "2023-01-01"}] },
    { id: 11, name: "Khalil", DOB: "1939-10-27", DOD: "2023-12-08", section: "A", graveNumber: 11, visitors: [{name: "Tamer", date: "2024-01-01"}, {name: "Yara", date: "2024-01-01"}] },
    { id: 12, name: "Dalia", DOB: "1977-03-15", DOD: "2024-05-24", section: "A", graveNumber: 12, visitors: [{name: "Mazen", date: "2025-01-01"}, {name: "Hiba", date: "2025-01-01"}, {name: "Sahar", date: "2025-01-01"}] },
    { id: 13, name: "Bashir", DOB: "1951-08-02", DOD: "2025-10-19", section: "A", graveNumber: 13, visitors: [] },
    { id: 14, name: "Sana", DOB: "1964-11-09", DOD: "2015-02-07", section: "A", graveNumber: 14, visitors: [{name: "Mira", date: "2016-01-01"}] },
    { id: 15, name: "Tariq", DOB: "1946-01-30", DOD: "2016-07-16", section: "A", graveNumber: 15, visitors: [{name: "Ola", date: "2017-01-01"}, {name: "Walid", date: "2017-01-01"}] },
    { id: 16, name: "Hiba", DOB: "1985-05-21", DOD: "2017-12-28", section: "A", graveNumber: "", visitors: [{name: "Riad", date: "2018-01-01"}, {name: "Nawal", date: "2018-01-01"}, {name: "Jamal", date: "2018-01-01"}] },
    { id: 17, name: "Samir", DOB: "1957-09-13", DOD: "2018-04-09", section: "A", graveNumber: 17, visitors: [{name: "Leen", date: "2019-01-01"}, {name: "Fouad", date: "2019-01-01"}, {name: "Maha", date: "2019-01-01"}, {name: "Amin", date: "2019-01-01"}] },
    { id: 18, name: "Jana", DOB: "1974-02-04", DOD: "2019-11-25", section: "A", graveNumber: 18, visitors: [{name: "Hussein", date: "2020-01-01"}, {name: "Ruba", date: "2020-01-01"}, {name: "Laith", date: "2020-01-01"}, {name: "Nada", date: "2020-01-01"}, {name: "Samer", date: "2020-01-01"}] },
    { id: 19, name: "Adnan", DOB: "1941-06-18", DOD: "2020-06-02", section: "A", graveNumber: 19, visitors: [{name: "Elias", date: "2021-01-01"}, {name: "Mays", date: "2021-01-01"}, {name: "Nasser", date: "2021-01-01"}, {name: "Rita", date: "2021-01-01"}, {name: "Majd", date: "2021-01-01"}, {name: "Abeer", date: "2021-01-01"}] },
    { id: 20, name: "Rania", DOB: "1969-04-07", DOD: "2021-09-13", section: "A", graveNumber: 20, visitors: [{name: "Hussein", date: "2022-01-01"}] },
    { id: 21, name: "Mahmoud", DOB: "1953-12-25", DOD: "2022-01-31", section: "A", graveNumber: 21, visitors: [{name: "Dima", date: "2023-01-01"}, {name: "Yazan", date: "2023-01-01"}] },
    { id: 22, name: "Reem", DOB: "1990-08-12", DOD: "2023-07-06", section: "A", graveNumber: 22, visitors: [{name: "Hala", date: "2024-01-01"}, {name: "Zaki", date: "2024-01-01"}, {name: "Rami", date: "2024-01-01"}] },
    { id: 23, name: "Wissam", DOB: "1947-03-16", DOD: "2024-04-22", section: "A", graveNumber: 23, visitors: [{name: "Yasmin", date: "2025-01-01"}, {name: "Fawzi", date: "2025-01-01"}, {name: "Nadine", date: "2025-01-01"}, {name: "Bassel", date: "2025-01-01"}] },
    { id: 24, name: "Maya", DOB: "1979-07-29", DOD: "2025-12-10", section: "A", graveNumber: 24, visitors: [] },
    { id: 25, name: "Ghassan", DOB: "1950-10-01", DOD: "2015-05-18", section: "A", graveNumber: 25, visitors: [{name: "Rola", date: "2016-01-01"}] },
    { id: 26, name: "Lara", DOB: "1988-05-05", DOD: "2016-02-27", section: "B", graveNumber: 1, visitors: [{name: "Ayman", date: "2017-01-01"}, {name: "Nisreen", date: "2017-01-01"}] },
    { id: 27, name: "Kareem", DOB: "1961-11-17", DOD: "2017-08-11", section: "B", graveNumber: 2, visitors: [{name: "Hala", date: "2018-01-01"}, {name: "Ziad", date: "2018-01-01"}, {name: "Mona", date: "2018-01-01"}] },
    { id: 28, name: "Nadine", DOB: "1972-02-20", DOD: "2018-03-04", section: "B", graveNumber: 3, visitors: [{name: "Fadi", date: "2019-01-01"}, {name: "Sawsan", date: "2019-01-01"}, {name: "Bilal", date: "2019-01-01"}, {name: "Ruba", date: "2019-01-01"}] },
    { id: 29, name: "Bilal", DOB: "1944-06-10", DOD: "2019-10-23", section: "B", graveNumber: "", visitors: [{name: "Nour", date: "2020-01-01"}, {name: "Hani", date: "2020-01-01"}, {name: "Mariam", date: "2020-01-01"}, {name: "Sami", date: "2020-01-01"}, {name: "Rima", date: "2020-01-01"}] },
    { id: 30, name: "Amira", DOB: "1966-03-28", DOD: "2020-01-15", section: "B", graveNumber: 5, visitors: [{name: "Jad", date: "2021-01-01"}, {name: "Hiba", date: "2021-01-01"}, {name: "Walid", date: "2021-01-01"}, {name: "Dalia", date: "2021-01-01"}, {name: "Tala", date: "2021-01-01"}, {name: "Omar", date: "2021-01-01"}] },
    { id: 31, name: "Jamal", DOB: "1958-09-07", DOD: "2021-06-30", section: "B", graveNumber: 6, visitors: [{name: "Lina", date: "2022-01-01"}] },
    { id: 32, name: "Tala", DOB: "1982-01-24", DOD: "2022-11-19", section: "B", graveNumber: 7, visitors: [{name: "Khaled", date: "2023-01-01"}, {name: "Mays", date: "2023-01-01"}] },
    { id: 33, name: "Hussein", DOB: "1949-04-14", DOD: "2023-04-08", section: "B", graveNumber: 8, visitors: [{name: "Rania", date: "2024-01-01"}, {name: "Nabil", date: "2024-01-01"}, {name: "Sana", date: "2024-01-01"}] },
    { id: 34, name: "Sawsan", DOB: "1960-08-31", DOD: "2024-12-26", section: "B", graveNumber: 9, visitors: [{name: "Layla", date: "2025-01-01"}, {name: "Adel", date: "2025-01-01"}, {name: "Samir", date: "2025-01-01"}, {name: "Dina", date: "2025-01-01"}] },
    { id: 35, name: "Laith", DOB: "1976-05-09", DOD: "2025-07-02", section: "B", graveNumber: 10, visitors: [] },
    { id: 36, name: "Muna", DOB: "1954-02-22", DOD: "2015-03-20", section: "B", graveNumber: 11, visitors: [{name: "Mazen", date: "2016-01-01"}] },
    { id: 37, name: "Fouad", DOB: "1942-10-03", DOD: "2016-09-13", section: "B", graveNumber: 12, visitors: [{name: "Nawal", date: "2017-01-01"}, {name: "Hani", date: "2017-01-01"}] },
    { id: 38, name: "Dima", DOB: "1986-12-18", DOD: "2017-05-07", section: "B", graveNumber: 13, visitors: [{name: "Rita", date: "2018-01-01"}, {name: "Majd", date: "2018-01-01"}, {name: "Riad", date: "2018-01-01"}] },
    { id: 39, name: "Nasser", DOB: "1956-06-26", DOD: "2018-11-28", section: "B", graveNumber: 14, visitors: [{name: "Abeer", date: "2019-01-01"}, {name: "Jana", date: "2019-01-01"}, {name: "Karim", date: "2019-01-01"}, {name: "Maha", date: "2019-01-01"}] },
    { id: 40, name: "Yara", DOB: "1970-09-15", DOD: "2019-02-16", section: "B", graveNumber: 15, visitors: [{name: "Bassam", date: "2020-01-01"}, {name: "Rana", date: "2020-01-01"}, {name: "Hadi", date: "2020-01-01"}, {name: "Mira", date: "2020-01-01"}, {name: "Amin", date: "2020-01-01"}] },
    { id: 41, name: "Zaki", DOB: "1945-07-02", DOD: "2020-10-05", section: "B", graveNumber: 16, visitors: [{name: "Sahar", date: "2021-01-01"}, {name: "Tamer", date: "2021-01-01"}, {name: "Ola", date: "2021-01-01"}, {name: "Faris", date: "2021-01-01"}, {name: "Nadia", date: "2021-01-01"}, {name: "Hanan", date: "2021-01-01"}] },
    { id: 42, name: "Salma", DOB: "1992-01-11", DOD: "2021-08-24", section: "B", graveNumber: 17, visitors: [{name: "Yazan", date: "2022-01-01"}] },
    { id: 43, name: "Tamer", DOB: "1963-03-06", DOD: "2022-01-09", section: "B", graveNumber: "", visitors: [{name: "Rasha", date: "2023-01-01"}, {name: "Elias", date: "2023-01-01"}] },
    { id: 44, name: "Ruba", DOB: "1981-10-19", DOD: "2023-06-17", section: "B", graveNumber: 19, visitors: [{name: "Nisreen", date: "2024-01-01"}, {name: "Samer", date: "2024-01-01"}, {name: "Hala", date: "2024-01-01"}] },
    { id: 45, name: "Walid", DOB: "1952-05-27", DOD: "2024-09-30", section: "B", graveNumber: 20, visitors: [{name: "Wissam", date: "2025-01-01"}, {name: "Ayman", date: "2025-01-01"}, {name: "Dalia", date: "2025-01-01"}, {name: "Maya", date: "2025-01-01"}] },
    { id: 46, name: "Hanan", DOB: "1967-04-08", DOD: "2025-05-11", section: "B", graveNumber: 21, visitors: [] },
    { id: 47, name: "Rami", DOB: "1959-11-23", DOD: "2015-12-25", section: "B", graveNumber: 22, visitors: [{name: "Omar", date: "2016-01-01"}] },
    { id: 48, name: "Maha", DOB: "1984-06-04", DOD: "2016-03-06", section: "B", graveNumber: 23, visitors: [{name: "Layla", date: "2017-01-01"}, {name: "Youssef", date: "2017-01-01"}] },
    { id: 49, name: "Hadi", DOB: "1940-02-12", DOD: "2017-07-21", section: "B", graveNumber: 24, visitors: [{name: "Mariam", date: "2018-01-01"}, {name: "Zaid", date: "2018-01-01"}, {name: "Rima", date: "2018-01-01"}] },
    { id: 50, name: "Nawal", DOB: "1973-09-28", DOD: "2018-12-10", section: "B", graveNumber: 25, visitors: [{name: "Fadi", date: "2019-01-01"}, {name: "Nour", date: "2019-01-01"}, {name: "Khalil", date: "2019-01-01"}, {name: "Sana", date: "2019-01-01"}] },
    { id: 51, name: "Abeer", DOB: "1950-04-01", DOD: "2019-04-18", section: "B", graveNumber: 26, visitors: [{name: "Tariq", date: "2020-01-01"}, {name: "Hiba", date: "2020-01-01"}, {name: "Samir", date: "2020-01-01"}, {name: "Jana", date: "2020-01-01"}, {name: "Adnan", date: "2020-01-01"}] },
    { id: 52, name: "Yazan", DOB: "1965-08-16", DOD: "2020-10-29", section: "B", graveNumber: 27, visitors: [{name: "Rania", date: "2021-01-01"}, {name: "Mahmoud", date: "2021-01-01"}, {name: "Reem", date: "2021-01-01"}, {name: "Wissam", date: "2021-01-01"}, {name: "Maya", date: "2021-01-01"}, {name: "Ghassan", date: "2021-01-01"}] },
    { id: 53, name: "Rita", DOB: "1995-12-30", DOD: "2021-06-03", section: "B", graveNumber: 28, visitors: [{name: "Lara", date: "2022-01-01"}] },
    { id: 54, name: "Majd", DOB: "1958-07-13", DOD: "2022-02-14", section: "B", graveNumber: 29, visitors: [{name: "Kareem", date: "2023-01-01"}, {name: "Nadine", date: "2023-01-01"}] },
    { id: 55, name: "Sahar", DOB: "1989-10-07", DOD: "2023-11-22", section: "B", graveNumber: 30, visitors: [{name: "Bilal", date: "2024-01-01"}, {name: "Amira", date: "2024-01-01"}, {name: "Jamal", date: "2024-01-01"}] },
    { id: 56, name: "Faris", DOB: "1947-01-20", DOD: "2024-05-04", section: "C", graveNumber: 1, visitors: [{name: "Tala", date: "2025-01-01"}, {name: "Hussein", date: "2025-01-01"}, {name: "Sawsan", date: "2025-01-01"}, {name: "Laith", date: "2025-01-01"}] },
    { id: 57, name: "Mays", DOB: "1978-06-09", DOD: "2025-08-16", section: "C", graveNumber: 2, visitors: [] },
    { id: 58, name: "Adel", DOB: "1955-03-25", DOD: "2015-01-28", section: "C", graveNumber: 3, visitors: [{name: "Muna", date: "2016-01-01"}] },
    { id: 59, name: "Rasha", DOB: "1962-11-02", DOD: "2016-06-13", section: "C", graveNumber: 4, visitors: [{name: "Fouad", date: "2017-01-01"}, {name: "Dima", date: "2017-01-01"}] },
    { id: 60, name: "Sami", DOB: "1983-04-17", DOD: "2017-09-22", section: "C", graveNumber: 5, visitors: [{name: "Nasser", date: "2018-01-01"}, {name: "Yara", date: "2018-01-01"}, {name: "Zaki", date: "2018-01-01"}] },
    { id: 61, name: "Hala", DOB: "1943-10-10", DOD: "2018-03-08", section: "C", graveNumber: 6, visitors: [{name: "Salma", date: "2019-01-01"}, {name: "Tamer", date: "2019-01-01"}, {name: "Ruba", date: "2019-01-01"}, {name: "Walid", date: "2019-01-01"}] },
    { id: 62, name: "Riad", DOB: "1975-05-21", DOD: "2019-12-19", section: "C", graveNumber: 7, visitors: [{name: "Hanan", date: "2020-01-01"}, {name: "Rami", date: "2020-01-01"}, {name: "Maha", date: "2020-01-01"}, {name: "Hadi", date: "2020-01-01"}, {name: "Nawal", date: "2020-01-01"}] },
    { id: 63, name: "Nadia", DOB: "1951-02-05", DOD: "2020-07-07", section: "C", graveNumber: 8, visitors: [{name: "Abeer", date: "2021-01-01"}, {name: "Yazan", date: "2021-01-01"}, {name: "Rita", date: "2021-01-01"}, {name: "Majd", date: "2021-01-01"}, {name: "Sahar", date: "2021-01-01"}, {name: "Faris", date: "2021-01-01"}] },
    { id: 64, name: "Mazen", DOB: "1966-08-14", DOD: "2021-02-26", section: "C", graveNumber: 9, visitors: [{name: "Mays", date: "2022-01-01"}] },
    { id: 65, name: "Rana", DOB: "1991-09-29", DOD: "2022-10-12", section: "C", graveNumber: 10, visitors: [{name: "Adel", date: "2023-01-01"}, {name: "Rasha", date: "2023-01-01"}] },
    { id: 66, name: "Amin", DOB: "1946-12-06", DOD: "2023-04-03", section: "C", graveNumber: 11, visitors: [{name: "Sami", date: "2024-01-01"}, {name: "Hala", date: "2024-01-01"}, {name: "Riad", date: "2024-01-01"}] },
    { id: 67, name: "Mira", DOB: "1970-01-18", DOD: "2024-11-23", section: "C", graveNumber: "", visitors: [{name: "Nadia", date: "2025-01-01"}, {name: "Mazen", date: "2025-01-01"}, {name: "Rana", date: "2025-01-01"}, {name: "Amin", date: "2025-01-01"}] },
    { id: 68, name: "Ola", DOB: "1957-03-11", DOD: "2025-06-09", section: "C", graveNumber: 13, visitors: [] },
    { id: 69, name: "Hani", DOB: "1949-07-24", DOD: "2015-03-31", section: "C", graveNumber: 14, visitors: [{name: "Mira", date: "2016-01-01"}] },
    { id: 70, name: "Rola", DOB: "1987-05-07", DOD: "2016-10-18", section: "C", graveNumber: 15, visitors: [{name: "Ola", date: "2017-01-01"}, {name: "Hani", date: "2017-01-01"}] },
    { id: 71, name: "Nabil", DOB: "1953-02-13", DOD: "2017-05-02", section: "C", graveNumber: 16, visitors: [{name: "Rola", date: "2018-01-01"}, {name: "Nabil", date: "2018-01-01"}, {name: "Amal", date: "2018-01-01"}] },
    { id: 72, name: "Yasmin", DOB: "1969-06-28", DOD: "2018-12-25", section: "C", graveNumber: 17, visitors: [{name: "Bassel", date: "2019-01-01"}, {name: "Leen", date: "2019-01-01"}, {name: "Samer", date: "2019-01-01"}, {name: "Nisreen", date: "2019-01-01"}] },
    { id: 73, name: "Bassel", DOB: "1941-04-04", DOD: "2019-07-14", section: "C", graveNumber: 18, visitors: [{name: "Jad", date: "2020-01-01"}, {name: "Tala", date: "2020-01-01"}, {name: "Mays", date: "2020-01-01"}, {name: "Hussein", date: "2020-01-01"}, {name: "Sawsan", date: "2020-01-01"}] },
    { id: 74, name: "Leen", DOB: "1994-09-16", DOD: "2020-02-06", section: "C", graveNumber: 19, visitors: [{name: "Laith", date: "2021-01-01"}, {name: "Muna", date: "2021-01-01"}, {name: "Fouad", date: "2021-01-01"}, {name: "Dima", date: "2021-01-01"}, {name: "Nasser", date: "2021-01-01"}, {name: "Yara", date: "2021-01-01"}] },
    { id: 75, name: "Samer", DOB: "1956-11-30", DOD: "2021-09-27", section: "C", graveNumber: 20, visitors: [{name: "Zaki", date: "2022-01-01"}] },
    { id: 76, name: "Amal", DOB: "1977-03-08", DOD: "2022-03-05", section: "C", graveNumber: 21, visitors: [{name: "Salma", date: "2023-01-01"}, {name: "Tamer", date: "2023-01-01"}] },
    { id: 77, name: "Jad", DOB: "1948-10-22", DOD: "2023-08-20", section: "C", graveNumber: 22, visitors: [{name: "Ruba", date: "2024-01-01"}, {name: "Walid", date: "2024-01-01"}, {name: "Hanan", date: "2024-01-01"}] },
    { id: 78, name: "Nisreen", DOB: "1963-01-01", DOD: "2024-01-01", section: "C", graveNumber: 23, visitors: [{name: "Rami", date: "2025-01-01"}, {name: "Maha", date: "2025-01-01"}, {name: "Hadi", date: "2025-01-01"}, {name: "Nawal", date: "2025-01-01"}] },
    { id: 79, name: "Elias", DOB: "1950-12-12", DOD: "2025-05-17", section: "C", graveNumber: 24, visitors: [] },
    { id: 80, name: "Tala", DOB: "1980-02-27", DOD: "2015-02-09", section: "C", graveNumber: 25, visitors: [{name: "Abeer", date: "2016-01-01"}] },
    { id: 81, name: "Fawzi", DOB: "1944-07-19", DOD: "2016-08-24", section: "C", graveNumber: 26, visitors: [{name: "Yazan", date: "2017-01-01"}, {name: "Rita", date: "2017-01-01"}] },
    { id: 82, name: "Dina", DOB: "1972-04-05", DOD: "2017-04-11", section: "C", graveNumber: "", visitors: [{name: "Majd", date: "2018-01-01"}, {name: "Sahar", date: "2018-01-01"}, {name: "Faris", date: "2018-01-01"}] },
    { id: 83, name: "Nour", DOB: "1989-01-15", DOD: "2018-10-30", section: "C", graveNumber: 28, visitors: [{name: "Mays", date: "2019-01-01"}, {name: "Adel", date: "2019-01-01"}, {name: "Rasha", date: "2019-01-01"}, {name: "Sami", date: "2019-01-01"}] },
    { id: 84, name: "Hiba", DOB: "1960-08-23", DOD: "2019-06-13", section: "C", graveNumber: 29, visitors: [{name: "Hala", date: "2020-01-01"}, {name: "Riad", date: "2020-01-01"}, {name: "Nadia", date: "2020-01-01"}, {name: "Mazen", date: "2020-01-01"}, {name: "Rana", date: "2020-01-01"}] },
    { id: 85, name: "Karim", DOB: "1959-10-10", DOD: "2020-01-21", section: "C", graveNumber: 30, visitors: [{name: "Amin", date: "2021-01-01"}, {name: "Mira", date: "2021-01-01"}, {name: "Ola", date: "2021-01-01"}, {name: "Hani", date: "2021-01-01"}, {name: "Rola", date: "2021-01-01"}, {name: "Nabil", date: "2021-01-01"}] },
    { id: 86, name: "Sahar", DOB: "1952-06-03", DOD: "2020-09-15", section: "D", graveNumber: 1, visitors: [{name: "Yasmin", date: "2021-01-01"}] },
    { id: 87, name: "Bassam", DOB: "1976-01-26", DOD: "2021-04-04", section: "D", graveNumber: 2, visitors: [{name: "Bassel", date: "2022-01-01"}, {name: "Leen", date: "2022-01-01"}] },
    { id: 88, name: "Sawsan", DOB: "1946-09-09", DOD: "2022-11-29", section: "D", graveNumber: 3, visitors: [{name: "Samer", date: "2023-01-01"}, {name: "Amal", date: "2023-01-01"}, {name: "Jad", date: "2023-01-01"}] },
    { id: 89, name: "Mariam", DOB: "1985-04-18", DOD: "2023-06-02", section: "D", graveNumber: 4, visitors: [{name: "Nisreen", date: "2024-01-01"}, {name: "Elias", date: "2024-01-01"}, {name: "Tala", date: "2024-01-01"}, {name: "Fawzi", date: "2024-01-01"}] },
    { id: 90, name: "Ziad", DOB: "1964-02-07", DOD: "2024-02-18", section: "D", graveNumber: 5, visitors: [{name: "Dina", date: "2025-01-01"}, {name: "Nour", date: "2025-01-01"}, {name: "Hiba", date: "2025-01-01"}, {name: "Karim", date: "2025-01-01"}, {name: "Sahar", date: "2025-01-01"}] },
    { id: 91, name: "Nadine", DOB: "1990-11-11", DOD: "2025-12-07", section: "D", graveNumber: 6, visitors: [] },
    { id: 92, name: "Omar", DOB: "1943-05-02", DOD: "2015-05-26", section: "D", graveNumber: 7, visitors: [{name: "Bassam", date: "2016-01-01"}] },
    { id: 93, name: "Layla", DOB: "1971-03-24", DOD: "2016-01-09", section: "D", graveNumber: 8, visitors: [{name: "Sawsan", date: "2017-01-01"}, {name: "Mariam", date: "2017-01-01"}] },
    { id: 94, name: "Youssef", DOB: "1958-08-13", DOD: "2017-07-22", section: "D", graveNumber: 9, visitors: [{name: "Ziad", date: "2018-01-01"}, {name: "Nadine", date: "2018-01-01"}, {name: "Omar", date: "2018-01-01"}] },
    { id: 95, name: "Rima", DOB: "1982-12-06", DOD: "2018-03-31", section: "D", graveNumber: 10, visitors: [{name: "Layla", date: "2019-01-01"}, {name: "Youssef", date: "2019-01-01"}, {name: "Rima", date: "2019-01-01"}, {name: "Fadi", date: "2019-01-01"}] },
    { id: 96, name: "Fadi", DOB: "1950-05-20", DOD: "2019-10-16", section: "D", graveNumber: "", visitors: [{name: "Nour", date: "2020-01-01"}, {name: "Khalil", date: "2020-01-01"}, {name: "Sana", date: "2020-01-01"}, {name: "Tariq", date: "2020-01-01"}, {name: "Hiba", date: "2020-01-01"}] },
    { id: 97, name: "Nour", DOB: "1967-07-28", DOD: "2020-02-12", section: "D", graveNumber: 12, visitors: [{name: "Samir", date: "2021-01-01"}, {name: "Jana", date: "2021-01-01"}, {name: "Adnan", date: "2021-01-01"}, {name: "Rania", date: "2021-01-01"}, {name: "Mahmoud", date: "2021-01-01"}, {name: "Reem", date: "2021-01-01"}] },
    { id: 98, name: "Khalil", DOB: "1947-02-01", DOD: "2021-08-05", section: "D", graveNumber: 13, visitors: [{name: "Wissam", date: "2022-01-01"}] },
    { id: 99, name: "Sana", DOB: "1996-06-15", DOD: "2022-04-27", section: "D", graveNumber: 14, visitors: [{name: "Maya", date: "2023-01-01"}, {name: "Ghassan", date: "2023-01-01"}] },
    { id: 100, name: "Tariq", DOB: "1956-09-19", DOD: "2023-10-08", section: "D", graveNumber: 15, visitors: [{name: "Lara", date: "2024-01-01"}, {name: "Kareem", date: "2024-01-01"}, {name: "Nadine", date: "2024-01-01"}] },
];

//age calculation function
function addAge(graves) {
  graves.forEach((grave) => {
    const birth = new Date(grave.DOB);
    const death = new Date(grave.DOD);
    let age = death.getFullYear() - birth.getFullYear();

    const hadBirthday =
      death.getMonth() > birth.getMonth() || (death.getMonth() === birth.getMonth() && death.getDate() >= birth.getDate());
    if (!hadBirthday) age--;

    grave.age = age;
  });

  return graves;
}

addAge(graves);
// console.log(graves[0]);
// console.table(graves, ["name", "DOB", "DOD", "age"]);


//empty graves calculation function
const sectionCapacity = { A: 30, B: 30, C: 30, D: 30 };
function emptyGraves(graves, section) {
  const occupied = graves.filter((grave) => grave.section === section)
    .map((grave) => grave.graveNumber);

  const empty = [];
  for (let i = 1; i <= sectionCapacity[section]; i++) {
    if (!occupied.includes(i)) empty.push(i);
  }
  return empty;
}

// console.log(emptyGraves(graves, "A"));

//DeceasedByYear function
function getDeceasedByYear(graves, year) {
   return graves.filter((grave) => new Date(grave.DOD).getFullYear() === year);
}

const result = getDeceasedByYear(graves, 2023);
// console.log("Number of Deceased in 2023:", result.length);
// console.table(result, ["name", "DOD"]);


//visits sort function
function sortVisits(graves){
    return [...graves].sort((a, b) => b.visitors.length - a.visitors.length);
}

const sorted = sortVisits(graves);
sorted.forEach((g) => {
//   console.log(`${g.name} , Section: ${g.section} , Grave: ${g.graveNumber} , Visitors: ${g.visitors.length}`);
});

//visits between date function
function VisitsBetweenDates(graves, startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const result = [];

  graves.forEach((grave) => {
    grave.visitors.forEach((visitor) => {
      const visitDate = new Date(visitor.date);

      if (visitDate >= start && visitDate <= end) {
        result.push({
          visitorName: visitor.name,
          visitDate: visitor.date,
          graveId: grave.id,
          deceasedName: grave.name,
          section: grave.section,
          graveNumber: grave.graveNumber,
        });
      }
    });
  });

  return result;
}

// const visits = VisitsBetweenDates(graves, "2025-01-01", "2025-12-31");
// console.log("Visits Number:", visits.length);
// console.table(visits);

