import MenuItem from "./MenuItem";
const TopMenu=()=>
{
    return (
        <div>
            <MenuItem url="/home" title="Home "/>
            <label>&nbsp;|&nbsp;</label>
            <MenuItem url="/studentdetails" title="Student "/>
            <label>&nbsp;|&nbsp;</label>
            <MenuItem url="/teacherdetails" title="Tutor "/>
            <label>&nbsp;|&nbsp;</label>
            <MenuItem url="/admin" title="Admin "/>
            <label>&nbsp;|&nbsp;</label>
            <MenuItem url="/course" title="CourseList "/>
            <label>&nbsp;|&nbsp;</label>
            <MenuItem url="/schedule" title="ScheduleList "/>
            <label>&nbsp;|&nbsp;</label>
            <MenuItem url="/token" title="TokenList "/>
            <label>&nbsp;|&nbsp;</label>
            <MenuItem url="/image" title="FileUpload "/>
            <label>&nbsp;|&nbsp;</label>
            <MenuItem url="/" title="Tutor Time!"/>
            <hr/><hr/>
        </div>
    )
}
export default TopMenu;