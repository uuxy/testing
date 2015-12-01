package webservice;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import com.siyuan.bean.Employee;

@Path("/employeeservice")
public class EmployeeService {

	private static Map<String, Employee> employees = new HashMap<String, Employee>();

	static {

		Employee employee1 = new Employee();
		employee1.setEmployeeId("1");
		employee1.setEmployeeName("Xiangyang Ye");
		employee1.setJobType("Higher Education");
		employee1.setSalary(100L);
		employee1.setAddress("SLC");
		employees.put(employee1.getEmployeeId(), employee1);

		Employee employee2 = new Employee();
		employee2.setEmployeeId("2");
		employee2.setEmployeeName("Yongmei Ni");
		employee2.setJobType("Higher Education");
		employee2.setSalary(200L);
		employee2.setAddress("SLC");
		employees.put(employee2.getEmployeeId(), employee2);

	}

	@GET
	@Path("/hello")
	@Produces("text/plain")
	public String hello() {
		return "Hello World!";
	}

	@GET
	@Path("/message/{message}")
	@Produces("text/plain")
	public String showMsg(@PathParam("message") String message) {
		return message;
	}

	@GET
	@Path("/employees")
	@Produces("application/xml")
	public List<Employee> listEmployees() {
		return new ArrayList<Employee>(employees.values());
	}

	@GET
	@Path("/employee/{employeeid}")
	@Produces("application/xml")
	public Employee getEmployee(@PathParam("employeeid") String employeeId) {
		return employees.get(employeeId);
	}

	@GET
	@Path("/json/employees/")
	@Produces("application/json")
	public List<Employee> listEmployeesJSON() {
		return new ArrayList<Employee>(employees.values());
	}

	@GET
	@Path("/json/employee/{employeeid}")
	@Produces("application/json")
	public Employee getEmployeeJSON(@PathParam("employeeid") String employeeId) {
		return employees.get(employeeId);
	}

}