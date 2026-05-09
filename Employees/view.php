<?php
    include 'db_connection.php';

    $id = $number = $firstName = $lastName = $departmentId = $position = $salary = $hireDate = '';

    include 'get_employee.php';
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>View Employee</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css">
</head>
<body class="bg-light">
<div class="container mt-5">
    <div class="card shadow">
        <div class="card-header bg-primary text-white">
            <h3 class="mb-0">Employee Details</h3>
        </div>
        <div class="card-body">
            <div class="row g-3">
                <div class="col-sm-12 col-md-6 col-lg-3">
                    <strong>Employee Number:</strong> <?php echo $number; ?>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-3">
                    <strong>First Name:</strong> <?php echo $firstName; ?>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-3">
                    <strong>Last Name:</strong> <?php echo $lastName; ?>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-3">
                    <strong>Position:</strong> <?php echo $position; ?>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-3">
                    <strong>Salary:</strong> <?php echo number_format($salary, 2); ?>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-3">
                    <strong>Hire Date:</strong> <?php echo date('d-m-Y', strtotime($hireDate)); ?>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-3">
                    <strong>Department:</strong>
                    <?php
                      try {
                          $query = "SELECT Name FROM Department WHERE Id = ?";
                          $stmt = $pdo->prepare($query);
                          $stmt->execute([$departmentId]);
                          $department = $stmt->fetch(PDO::FETCH_ASSOC);
                          echo $department['Name'];
                      } catch (PDOException $e) {
                          echo "Error loading department";
                      }
                    ?>
                </div>
            </div>

            <div class="d-flex justify-content-between mt-4">
                <a href="list.php" class="btn btn-secondary">
                    <i class="bi bi-arrow-left"></i> Back to List
                </a>
                <div>
                    <a href="registration.php?id=<?php echo $id; ?>" class="btn btn-warning me-2">
                        <i class="bi bi-pencil-fill"></i> Edit
                    </a>
                    <a href="delete.php?id=<?php echo $id; ?>" class="btn btn-danger">
                        <i class="bi bi-trash-fill"></i> Delete
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>