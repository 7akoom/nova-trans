import { useState } from "react";
import { Search, Package, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { mockTracking } from "@/lib/api";
import { toast } from "sonner";

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [shipment, setShipment] = useState<typeof mockTracking | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleTrack = async () => {
    if (!trackingNumber.trim()) {
      toast.error("الرجاء إدخال رقم التتبع");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // TODO: Replace with actual API call
      setShipment(mockTracking);
      setIsLoading(false);
      toast.success("تم العثور على الشحنة");
    }, 1000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "text-green-600 bg-green-50";
      case "in_transit":
        return "text-blue-600 bg-blue-50";
      case "delayed":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "pending":
        return "قيد الانتظار";
      case "in_transit":
        return "في الطريق";
      case "out_for_delivery":
        return "خارج للتوصيل";
      case "delivered":
        return "تم التوصيل";
      case "delayed":
        return "متأخر";
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navbar />

      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              تتبع شحنتك
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              تابع شحنتك لحظة بلحظة من خلال رقم التتبع
            </p>
          </div>

          {/* Search Box */}
          <Card className="max-w-2xl mx-auto mb-12 shadow-custom-md animate-fade-in">
            <CardContent className="p-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="أدخل رقم التتبع (مثال: SH123456789)"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleTrack()}
                    className="pr-10 h-12"
                  />
                </div>
                <Button
                  onClick={handleTrack}
                  disabled={isLoading}
                  className="bg-gradient-hero hover:opacity-90 h-12 px-8"
                >
                  {isLoading ? "جاري البحث..." : "تتبع"}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          {shipment && (
            <div className="max-w-4xl mx-auto animate-fade-in">
              {/* Shipment Summary */}
              <Card className="mb-8 shadow-custom-md">
                <CardHeader className="bg-gradient-hero text-primary-foreground">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Package className="w-6 h-6" />
                      <span>تفاصيل الشحنة</span>
                    </div>
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(
                        shipment.status
                      )}`}
                    >
                      {getStatusText(shipment.status)}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">من</span>
                      </div>
                      <p className="font-semibold text-foreground">
                        {shipment.origin.city}, {shipment.origin.country}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">إلى</span>
                      </div>
                      <p className="font-semibold text-foreground">
                        {shipment.destination.city}, {shipment.destination.country}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">التوصيل المتوقع</span>
                      </div>
                      <p className="font-semibold text-foreground">
                        {new Date(shipment.estimatedDelivery).toLocaleDateString("ar")}
                      </p>
                    </div>
                  </div>

                  {shipment.currentLocation && (
                    <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">الموقع الحالي</p>
                      <p className="font-semibold text-foreground">
                        {shipment.currentLocation.city}, {shipment.currentLocation.country}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Timeline */}
              <Card className="shadow-custom-md">
                <CardHeader>
                  <CardTitle>تاريخ الشحنة</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {shipment.updates.map((update, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                            <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
                          </div>
                        </div>
                        <div className="flex-1 pb-6 border-b border-border last:border-0">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-foreground">
                              {getStatusText(update.status)}
                            </h3>
                            <span className="text-sm text-muted-foreground">
                              {new Date(update.timestamp).toLocaleString("ar")}
                            </span>
                          </div>
                          <p className="text-muted-foreground mb-1">{update.description}</p>
                          <p className="text-sm text-muted-foreground">
                            {update.location.city}, {update.location.country}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Help Section */}
          {!shipment && (
            <Card className="max-w-2xl mx-auto mt-8 animate-fade-in">
              <CardContent className="p-8 text-center">
                <Package className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  كيف يمكنني تتبع شحنتي؟
                </h3>
                <p className="text-muted-foreground mb-4">
                  أدخل رقم التتبع الذي تم إرساله إليك عبر البريد الإلكتروني أو الرسائل النصية
                </p>
                <p className="text-sm text-muted-foreground">
                  رقم التتبع يتكون من 11 رقم ويبدأ بـ SH (مثال: SH123456789)
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tracking;
