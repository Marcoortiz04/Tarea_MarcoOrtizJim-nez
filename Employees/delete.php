<?php
    include 'db_connection.php';

    $id = $firstName = $lastName = $departmentId = $position = '';

    include 'get_employee.php';
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Delete Employee</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css">
</head>
<body class="bg-light">
<div class="container mt-5">
    <div class="card shadow border-danger">
        <div class="card-header bg-danger text-white">
            <h3 class="mb-0">Confirm Delete</h3>
        </div>
        <div class="card-body">
            <p class="lead">Are you sure you want to delete the following employee record?</p>
            <div class="row g-3 mb-4">
                <div class="col-sm-12 col-md-6 col-lg-3">
                    <strong>Name:</strong> <?php echo $firstName . ' ' . $lastName ; ?>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-3">
                    <strong>Position:</strong> <?php echo $position; ?>
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

            <div class="d-flex justify-content-between">
                <a href="list.php" class="btn btn-secondary">
                    <i class="bi bi-arrow-left"></i> Back to List
                </a>
                <form action="process_delete.php" method="POST" class="d-inline">
                    <input type="hidden" name="id" value="<?php echo $id; ?>">
                    <button type="submit" class="btn btn-danger">
                        <i class="bi bi-trash-fill"></i> Confirm Delete
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>
</body>
</html>