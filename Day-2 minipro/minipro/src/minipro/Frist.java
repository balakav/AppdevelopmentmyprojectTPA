//package minipro;
//
//import java.sql.*;
//import java.util.Scanner;
//
//class First {
//	 public static void main(String[] args) throws ClassNotFoundException, SQLException {
//	       
//	       
//	       
//	        Scanner sc=new Scanner(System.in);
//	        System.out.println("+-----------------------------------------------------------------------------------------+");
//	        System.out.println("+                 Welcome to the Courier Management System!                               +");
//	        System.out.println("+-----------------------------------------------------------------------------------------+");
//	        System.out.println();
//	        System.out.println();
//	        while (true) {
//	        	System.out.println("*-------------------------------*");
//	            System.out.println("*Select an option:              *");
//	            System.out.println("*1. Customer                    *");
//	            System.out.println("*2. Payment_Details             *");
//	            System.out.println("*3. Update Delivery Status      *");
//	            System.out.println("*4. Item_Details                *");
//	            System.out.println("*-------------------------------*");
//	            System.out.print("Enter your choice:");
//	            int choice = sc.nextInt();
//	            sc.nextLine(); // Consume the newline character
//
//	            switch (choice) {
//	                case 1:
//	                	 customer_table cobj=new customer_table();
//	         	        cobj.Showcustomerdetails();
//	                    break;
//	                case 2:
//	                	payment_Table pobj=new payment_Table();
//	        	        pobj.show_PaymentDetails();
//	                    break;
//	                case 3:
//	                	 delivery_table deliveryTable = new delivery_table();
//	         	        deliveryTable.Show_delivery_Status();
//	                    break;
//	                case 4:
//	                	 Item_table iobj=new Item_table();
//	         	        iobj.show_ItemNames();
//	         	        
//	                    break;
//	                default:
//	                    System.out.println("Invalid choice. Please try again.");
//	            }
//	        }
//	    }
//	    }
//	
//
//
//class customer_table extends First{
//	public void Showcustomerdetails() throws ClassNotFoundException, SQLException {
//		
//	
//	//public static void main(String[] args) throws Exception{
//		// TODO Auto-generated method stub
//		
//		Scanner sc=new Scanner(System.in);
//		Class.forName("com.mysql.cj.jdbc.Driver");
//        Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/minipro","root","Bala12#$");
//        System.out.println("Connection Success");
//        String query="insert into customer(name,email,phone_no,from_address,To_address,Date) values(?,?,?,?,?,?);"; 
//        PreparedStatement st = con.prepareStatement(query);
//        System.out.print("Enetr the no of how recards you add the customer table:");
//        int n=sc.nextInt();
//        sc.nextLine();
//        for(int i=0;i<n;i++)
//        {
//        	System.out.print("Enter the name:");
//        	String name = sc.nextLine();
//        	System.out.print("Enter the email:");
//        	String email=sc.nextLine();
//        	
//        	
//        	System.out.print("Enter the phone_no:");
//        	String phone_no=sc.nextLine();
//        	System.out.print("Enter the from_address:");
//            String from_address=sc.nextLine();
//            System.out.print("Enter the To_Address:");
//            String To_address=sc.nextLine();
//            System.out.print("Enetr the date:");
//            String Date=sc.nextLine();
//            
//            st.setString(1,name);
//            st.setString(2,email);
//            st.setString(3, phone_no);
//            st.setString(4, from_address);
//            st.setString(5, To_address);
//            st.setString(6, Date);
//            st.executeUpdate();
//        }
//        sc.close();
//    ResultSet rs = st.executeQuery("select * from customer");
//    while(rs.next())
//    {
//            System.out.println(rs.getString(1)+" "+rs.getString(2)+" "+rs.getString(3)+" "+rs.getString(4)+" "+rs.getString(5)+" "+rs.getString(6));
//        
//    }
//	//}
//	}
//}
//
//
//
//class payment_Table extends First{
//	//public static void main(String[] args) throws Exception{
//	public void show_PaymentDetails() throws ClassNotFoundException, SQLException {
//		
//	
//		// TODO Auto-generated method stub
//		
//		Scanner sc=new Scanner(System.in);
//		Class.forName("com.mysql.cj.jdbc.Driver");
//        Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/minipro","root","Bala12#$");
//        System.out.println("Connection Success");
//        String query="insert into payment(payment_type,bank_name,Amount) values(?,?,?);"; 
//        PreparedStatement st = con.prepareStatement(query);
//        System.out.print("Enetr the no of how recards you add the payment_table:");
//        int n=sc.nextInt();
//        sc.nextLine();
//        for(int i=0;i<n;i++)
//        {
//        	System.out.print("Enter the payment_type:");
//        	String payment_type = sc.nextLine();
//        	System.out.print("Enter the bank_name:");
//        	String bank_name=sc.nextLine();
//        	
//        	
//        	System.out.print("Enter the Amount:");
//        	int amount=sc.nextInt();
//        	
//            st.setString(1,payment_type);
//            st.setString(2,bank_name);
//            st.setInt(3, amount);
//            st.executeUpdate();
//        }
//        sc.close();
//    ResultSet rs = st.executeQuery("select * from payment");
//    while(rs.next())
//    {
//            System.out.println(rs.getString("payment_type")+" "+rs.getString("bank_name")+" "+rs.getInt("Amount"));
//        
//    }
//	//}
//	}
//}
//
//
//
//class delivery_table extends First{
//	//public static void main(String[] args) throws Exception{
//	public void Show_delivery_Status() throws ClassNotFoundException, SQLException {
//		Scanner sc=new Scanner(System.in);
//		Class.forName("com.mysql.cj.jdbc.Driver");
//        Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/minipro","root","Bala12#$");
//        System.out.println("Connection Success");
//        String query="insert into delivery(delivery_status) values(?);"; 
//        PreparedStatement st = con.prepareStatement(query);
//        System.out.print("Enetr the no of how recards you add the delivery table:");
//        int n=sc.nextInt();
//        sc.nextLine();
//        for(int i=0;i<n;i++)
//        {
//        	System.out.print("Enter the status:");
//        	String delivery_status = sc.nextLine();
//        	
//            st.setString(1, delivery_status);
//            st.executeUpdate();
//        }
//        sc.close();
//    ResultSet rs = st.executeQuery("SELECT d.D_id, d.delivery_status, c.cust_id, c.from_address FROM delivery d JOIN customer c ON c.cust_id = d.D_id");
//    while(rs.next())
//    {
//            System.out.println(rs.getString("delivery_status")+" "+rs.getInt("cust_id")+" "+rs.getString("From_Address"));
//        
//    }
//	//}
//	}
//}
//
//class Item_table extends First{
//	public void show_ItemNames() throws SQLException, ClassNotFoundException {
//		
//	
//	//public static void main(String[] args) throws Exception,SQLException{
//		// TODO Auto-generated method stub
//		
//		Scanner sc=new Scanner(System.in);
//		Class.forName("com.mysql.cj.jdbc.Driver");
//        Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/minipro","root","Bala12#$");
//        System.out.println("Connection Success");
//        String query="insert into item(Item_type,Item_weight) values(?,?);"; 
//        PreparedStatement st = con.prepareStatement(query);
//        System.out.print("Enetr the no of how recards you add the Item table:");
//        int n=sc.nextInt();
//        sc.nextLine();
//        for(int i=0;i<n;i++)
//        {
//        	System.out.print("Enter the Item_Type:");
//        	String I_t = sc.nextLine();
//        	System.out.print("Enter the weight of the Item:");
//        	int w=sc.nextInt();
//        	
//        	
//            st.setString(1, I_t);
//            st.setInt(2, w);
//            st.executeUpdate();
//        }
//        sc.close();
//    ResultSet rs = st.executeQuery("select * from item");
//    while(rs.next())
//    {
//            System.out.println(rs.getString("Item_Type")+" "+rs.getInt("Item_weight"));
//        
//    }
//	//}
//	}
//}
//

package minipro;

import java.sql.*;
import java.util.Scanner;

public class Frist {
    private static final String DB_URL = "jdbc:mysql://localhost:3306/minipro";
    private static final String DB_USER = "root";
    private static final String DB_PASSWORD = "Bala12#$";

    
    private static Connection getConnection() throws ClassNotFoundException, SQLException {
        Class.forName("com.mysql.cj.jdbc.Driver");
        return DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
    }

    
    private static void addCustomer() {
        try (Connection con = getConnection();
             PreparedStatement pst = con.prepareStatement("INSERT INTO customer (name, email, phone_no, from_address, To_address, Date,delivery_status,Item_Type,Item_weight,paymentType,amount) VALUES (?, ?, ?, ?, ?, ?,?,?,?,?,?)")) {

            Scanner sc = new Scanner(System.in);
            System.out.print("Enter the number of how records you want to add to the customer table: ");
            int n = sc.nextInt();
            sc.nextLine();

            for (int i = 0; i < n; i++) {
                System.out.print("Enter the name: ");
                String name = sc.nextLine();
                System.out.print("Enter the email: ");
                String email = sc.nextLine();
                System.out.print("Enter the phone_no: ");
                String phoneNo = sc.nextLine();
                System.out.print("Enter the from_address: ");
                String fromAddress = sc.nextLine();
                System.out.print("Enter the To_Address: ");
                String toAddress = sc.nextLine();
                System.out.print("Enter the date: ");
                String date = sc.nextLine();
                System.out.print("Enter the delivery_status:");
                String delivery_status=sc.nextLine();
                System.out.print("Enter the Item_Type: ");
                String itemType = sc.nextLine();
                System.out.print("Enter the weight of the Item: ");
                int weight = sc.nextInt();
                sc.nextLine(); 
                System.out.print("Enter the payment_type: ");
              String paymentType = sc.nextLine();
              System.out.print("Enter the Amount: ");
              int amount = sc.nextInt();
              sc.nextLine(); // Consume the newline character

               
                pst.setString(1, name);
                pst.setString(2, email);
                pst.setString(3, phoneNo);
                pst.setString(4, fromAddress);
                pst.setString(5, toAddress);
                pst.setString(6, date);
                pst.setString(7, delivery_status);
                pst.setString(8, itemType);
                pst.setInt(9, weight);
                pst.setString(10, paymentType);
                pst.setInt(11, amount);
                pst.executeUpdate();
            }

            ResultSet rs = pst.executeQuery("SELECT * FROM customer");
            while (rs.next()) {
                System.out.println(rs.getString("name") + " " + rs.getString("email") + " " +
            rs.getString("phone_no") + " " +rs.getString("from_address") + " " +
           rs.getString("To_address") + " " + rs.getString("Date")+" "+
           rs.getString("delivery_status")+" "+rs.getString("Item_Type")+" "+
           rs.getString("Item_weight")+" "+rs.getString("paymentType")+" "+rs.getString("amount"));
                
            }

        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }
    }

    private static void Alreadyhaveaccount() {
    	try (Connection con = getConnection();
    		     PreparedStatement updatePst = con.prepareStatement("UPDATE customer SET from_address=?, To_address=?, Date=?, delivery_status=?, Item_Type=?, Item_weight=?, paymentType=?, amount=? WHERE cust_id = ?");
    		     PreparedStatement insertPst = con.prepareStatement("INSERT INTO oldcustomer (cust_id, from_address, To_address, Date, delivery_status, Item_Type, Item_weight, paymentType, amount) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)")) {

    		    Scanner sc = new Scanner(System.in);
    		    System.out.print("Enter the cust_id: ");
    		    int cust_id = sc.nextInt();
    		    sc.nextLine(); // Consume the newline character

    		    System.out.print("Enter the from_address: ");
    		    String fromAddress = sc.nextLine();
    		    System.out.print("Enter the To_Address: ");
    		    String toAddress = sc.nextLine();
    		    System.out.print("Enter the date: ");
    		    String date = sc.nextLine();
    		    System.out.print("Enter the delivery_status: ");
    		    String delivery_status = sc.nextLine();
    		    System.out.print("Enter the Item_Type: ");
    		    String itemType = sc.nextLine();
    		    System.out.print("Enter the weight of the Item: ");
    		    int weight = sc.nextInt();
    		    sc.nextLine();
    		    System.out.print("Enter the payment_type: ");
    		    String paymentType = sc.nextLine();
    		    System.out.print("Enter the Amount: ");
    		    int amount = sc.nextInt();
    		    sc.nextLine(); // Consume the newline character

    		    // Update query
    		    updatePst.setString(1, fromAddress);
    		    updatePst.setString(2, toAddress);
    		    updatePst.setString(3, date);
    		    updatePst.setString(4, delivery_status);
    		    updatePst.setString(5, itemType);
    		    updatePst.setInt(6, weight);
    		    updatePst.setString(7, paymentType);
    		    updatePst.setInt(8, amount);
    		    updatePst.setInt(9, cust_id);

    		    int rowsAffected = updatePst.executeUpdate();

    		    if (rowsAffected > 0) {
    		        System.out.println("Update successful.");

    		        // Insert query
    		        insertPst.setInt(1, cust_id);
    		        insertPst.setString(2, fromAddress);
    		        insertPst.setString(3, toAddress);
    		        insertPst.setString(4, date);
    		        insertPst.setString(5, delivery_status);
    		        insertPst.setString(6, itemType);
    		        insertPst.setInt(7, weight);
    		        insertPst.setString(8, paymentType);
    		        insertPst.setInt(9, amount);

    		        int rowsInserted = insertPst.executeUpdate();

    		        if (rowsInserted > 0) {
    		            System.out.println("Data inserted into the oldcustomer table.");
    		        } else {
    		            System.out.println("Failed to insert data into the oldcustomer table.");
    		        }
    		    } else {
    		        System.out.println("No records found for the given customer_id.");
    		    }

    		} catch (ClassNotFoundException | SQLException e) {
    		    e.printStackTrace();
    		}

    }

  
    private static void updateDeliveryStatus() {
        try (Connection con = getConnection();
             PreparedStatement pst = con.prepareStatement("UPDATE customer SET delivery_status = ? WHERE cust_id = ?")) {

            Scanner sc = new Scanner(System.in);
            System.out.print("Enter the new delivery status: ");
            String newStatus = sc.nextLine();
            System.out.print("Enter the customer_id whose status you want to update: ");
            int cust_id = sc.nextInt();

            pst.setString(1, newStatus);
            pst.setInt(2, cust_id);
            int rowsAffected = pst.executeUpdate();

            if (rowsAffected > 0) {
                System.out.println("Delivery status updated successfully.");
            } else {
                System.out.println("No records found for the given customer_id.");
            }

        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }
    }
    private static void Oldcustomerdetails() {
    	String DB_URL = "jdbc:mysql://localhost:3306/minipro";
        String DB_USER = "root";
      String DB_PASSWORD = "Bala12#$";
       String query = "SELECT * FROM oldcustomer";

       try (Connection connection = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
            PreparedStatement statement = connection.prepareStatement(query);
            ResultSet resultSet = statement.executeQuery()) {

           while (resultSet.next()) {
               String cust_id = resultSet.getString("cust_id");
               String fromAddress = resultSet.getString("from_address");
               String toAddress = resultSet.getString("to_address");
               String date = resultSet.getString("date");
               String deliveryStatus = resultSet.getString("delivery_status");
               String itemType = resultSet.getString("item_type");
               String itemWeight = resultSet.getString("item_weight");
               String paymentType = resultSet.getString("paymentType");
               String amount = resultSet.getString("amount");

               System.out.printf("%n %s %s %s %s %s %n %s %n%n",
                       cust_id, fromAddress, toAddress, date,
                       deliveryStatus, itemType, itemWeight, paymentType, amount);

           }
       } catch (SQLException e) {
           e.printStackTrace();
       }
    }
    private static void showCustomers() {
    	String DB_URL = "jdbc:mysql://localhost:3306/minipro";
         String DB_USER = "root";
       String DB_PASSWORD = "Bala12#$";
        String query = "SELECT * FROM customer";

        try (Connection connection = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
             PreparedStatement statement = connection.prepareStatement(query);
             ResultSet resultSet = statement.executeQuery()) {

            while (resultSet.next()) {
                String name = resultSet.getString("name");
                String email = resultSet.getString("email");
                String phoneNo = resultSet.getString("phone_no");
                String fromAddress = resultSet.getString("from_address");
                String toAddress = resultSet.getString("to_address");
                String date = resultSet.getString("date");
                String deliveryStatus = resultSet.getString("delivery_status");
                String itemType = resultSet.getString("item_type");
                String itemWeight = resultSet.getString("item_weight");
                String paymentType = resultSet.getString("paymentType");
                String amount = resultSet.getString("amount");

                System.out.printf("%s %s %s %s %s %s %s %s %s %s %s%n",
                        name, email, phoneNo, fromAddress, toAddress, date,
                        deliveryStatus, itemType, itemWeight, paymentType, amount);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }



   
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("+-----------------------------------------------------------------------------------------+");
        System.out.println("+                 Welcome to the Courier Management System!                               +");
        System.out.println("+-----------------------------------------------------------------------------------------+");
        System.out.println();
        System.out.println();
        while (true) {
            System.out.println("*-----------------------------------*");
            System.out.println("*Select an option:                  *");
            System.out.println("*1. New_Customer                    *");
            System.out.println("*2. Already have a account          *");
            System.out.println("*3. Update Delivery Status          *");
            System.out.println("*4. Allcustomerdetails              *");
            System.out.println("*5.oldcustomerdetails               *");
            System.out.println("*6. Exit                            *");
            System.out.println("*-----------------------------------*");
            System.out.print("Enter your choice: ");
            int choice = sc.nextInt();
            sc.nextLine(); 

            switch (choice) {
                case 1:
                    addCustomer();
                    break;
                case 2:
                	Alreadyhaveaccount();
                	break;
                case 3:
                	//showDeliveryStatus();
                	updateDeliveryStatus();
                	break;
                case 4:
                	showCustomers();
                	break;
                case 5:
                	Oldcustomerdetails();
                	break;
                case 6:
                	System.out.println("Exiting the application.");
                	System.out.println("---- THANKS FOR VISITING ----");
                    return;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }
}



























