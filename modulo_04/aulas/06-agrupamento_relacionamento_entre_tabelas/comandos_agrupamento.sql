select * from students;

select count(*) as countStudents from students;

select count(*) from students where year <= 5;

select 'under_5_years_old' as studants, count(year) as year from students
where year <= 5

union all

select 'avage' as name, round(avg(year), 1) as year
from students where year <= 5;

select year, count(id) from students
group by year;

select house_id, count(id) from students
group by house_id
order by house_id;

select house_id, count(id) from students
where year < 4
group by house_id
order by house_id;

-- AGRUAPAMENTOS JOIN
select * from teachers
join classes on teachers.id = classes.teacher_id
join houses on teachers.house_id = houses.id;

select teachers.id, teachers.name, teachers.house_id,
houses.name,
classes.id as class_id, classes.subject
from teachers
join classes on teachers.id = classes.teacher_id
join houses on teachers.house_id = houses.id;

-----------

select st.house_id, ho.name, st.id as student_id, st.name, st.year
from houses as ho
join students as st on ho.id = st.house_id;

select house_id, count(id) from students
group by house_id;

select h.name as house_name, count(s.id) as studentsCount
from houses as h
join students as s on s.house_id = h.id
group by house_name;

-- Uso do inner join vai retornar apenas as interceções válidas não nulas
create view count_students_for_house as
(select houses.name as house_name, count(students.id) as students_count
from houses
INNER join students on houses.id = students.house_id
group by houses.name
order by students_count)

union all

(select 'Total' as house_name, count(id) as students_count from students);
-- Colocar as query entre parenteses também possibilida ordenar a contagem e manter a somatória
-- em ultimo lugar para criar um view por exemplo

select * from count_students_for_house;

-- cadinalidade muitos para muitos
select *
from classes as c
join class_rosters as cr on cr.class_id = c.id
join students as s on cr.student_id = s.id;

select cr.class_id, c.subject, cr.student_id, s.name
from classes as c
join class_rosters as cr on cr.class_id = c.id
join students as s on cr.student_id = s.id;

select c.id, c.subject, count(s.id)
from classes as c
join class_rosters as cr on cr.class_id = c.id
join students as s on cr.student_id = s.id
group by c.subject, c.id;

-- LEFT JOIN e RIGTH JOIN
select * from teachers;

select * from houses;

select * from teachers inner join houses on teachers.house_id = houses.id;

select * from teachers left join houses on teachers.house_id = houses.id;

select * from teachers right join houses on teachers.house_id = houses.id;
