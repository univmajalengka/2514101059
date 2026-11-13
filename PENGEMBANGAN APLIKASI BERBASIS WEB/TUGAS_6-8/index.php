
<?php

// Fungsi untuk menghitung diskon
function hitungDiskon($totalBelanja) {
    $diskon = 0;

    if ($totalBelanja >= 100000) {
        $diskon = 0.10 * $totalBelanja;
    } elseif ($totalBelanja >= 50000) {
        $diskon = 0.05 * $totalBelanja;
    }

    return $diskon;
}

// Proses perhitungan
$totalBelanja = 0;
$diskon = 0;
$totalBayar = 0;
$persentaseDiskon = 0;
$dihitung = false;

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $totalBelanja = (float) $_POST['totalBelanja'];

    if ($totalBelanja >= 0) {

        // Menentukan persentase diskon
        if ($totalBelanja >= 100000) {
            $persentaseDiskon = 10;
        } elseif ($totalBelanja >= 50000) {
            $persentaseDiskon = 5;
        }

        // Memanggil fungsi hitung diskon
        $diskon = hitungDiskon($totalBelanja);

        // Menghitung total pembayaran
        $totalBayar = $totalBelanja - $diskon;

        $dihitung = true;
    }
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Program Menghitung Diskon</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f1f5f9;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
        }

        .container {
            background: white;
            width: 420px;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        h2 {
            text-align: center;
            color: #1e293b;
        }

        label {
            display: block;
            margin-top: 25px;
            margin-bottom: 10px;
            font-weight: bold;
        }

        input {
            width: 100%;
            padding: 15px;
            box-sizing: border-box;
            border: 1px solid #cbd5e1;
            border-radius: 8px;
            font-size: 16px;
        }

        button {
            width: 100%;
            padding: 14px;
            margin-top: 20px;
            background: #2563eb;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
        }

        button:hover {
            background: #1d4ed8;
        }

        .hasil {
            margin-top: 30px;
            padding: 20px;
            background: #f0fdf4;
            border-radius: 10px;
        }

        .hasil h3 {
            margin-bottom: 25px;
        }

        .hasil p {
            display: flex;
            justify-content: space-between;
            gap: 10px;
            margin: 18px 0;
        }

        .total {
            font-weight: bold;
            color: #15803d;
            font-size: 20px;
        }

        hr {
            border: 0;
            border-top: 1px solid #ccc;
            margin: 25px 0;
        }
    </style>
</head>

<body>

<div class="container">

    <h2>Hitung Diskon Belanja</h2>

    <form method="POST">

        <label>Masukkan Total Belanja (Rp)</label>

        <input
            type="number"
            name="totalBelanja"
            placeholder="Contoh: 120000"
            min="0"
            step="1"
            required
            value="<?php echo isset($_POST['totalBelanja']) ? htmlspecialchars($_POST['totalBelanja']) : ''; ?>"
        >

        <button type="submit">Hitung Diskon</button>

    </form>

    <?php if ($dihitung): ?>

        <div class="hasil">

            <h3>Hasil Perhitungan</h3>

            <p>
                <span>Total Belanja</span>
                <strong>Rp <?php echo number_format($totalBelanja, 0, ',', '.'); ?></strong>
            </p>

            <p>
                <span>Diskon (<?php echo $persentaseDiskon; ?>%)</span>
                <strong>Rp <?php echo number_format($diskon, 0, ',', '.'); ?></strong>
            </p>

            <hr>

            <p class="total">
                <span>Total Bayar</span>
                <span>Rp <?php echo number_format($totalBayar, 0, ',', '.'); ?></span>
            </p>

        </div>

    <?php endif; ?>

</div>

</body>
</html>
