'use client'

import dynamic from 'next/dynamic'

const DashboardLayout = dynamic(() => import('@/layout/DashboardLayout'), {
    ssr: false,
    import NewPrayerForm from '@/components/NewPrayerForm',
    loading: () => (
        <div
            className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                <p className="text-gray-600">로딩 중...</p>
            </div>
        </div>
    )
})

const GlassCard = dynamic(() => import('@/components/ui/GlassCard'))

export default function Prayer() {
    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">기도 제목</h1>
                    <p className="text-gray-600">서로의 기도 제목을 나누고 함께 기도해요.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <GlassCard size="md">
                        <div className="text-center">
                            <div
                                className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-xs">🙏</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">개인 기도</h3>
                            <p className="text-gray-600 mb-4">개인적인 기도 제목을 나누어주세요.</p>
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                                기도 올리기
                            </button>
                        </div>
                    </GlassCard>

                    <GlassCard size="md">
                        <div className="text-center">
                            <div
                                className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-xs">👨‍👩‍👧‍👦</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">가족 기도</h3>
                            <p className="text-gray-600 mb-4">가족과 사랑하는 사람들을 위한 기도.</p>
                            <button
                                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                                가족 기도
                            </button>
                        </div>
                    </GlassCard>

                    <GlassCard size="md">
                        <div className="text-center">
                            <div
                                className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-xs">🌍</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">선교 기도</h3>
                            <p className="text-gray-600 mb-4">선교사님들과 복음 전파를 위한 기도.</p>
                            // 새 기도 제목 추가
                            const handleNewPrayer = (newPrayer: PrayerRequest) => {
                            setPrayerRequests(prev => [newPrayer, ...prev])
                        }

                            <button
                                className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
                                선교 기도
                            </button>
                        </div>
                    </GlassCard>

                    <GlassCard size="md">
                        <div className="text-center">
                            <div
                                className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-xs">🎯</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">응답된 기도</h3>
                            <p className="text-gray-600 mb-4">하나님이 응답하신 기도의 간증.</p>
                            <button
                                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                                간증 나누기
                            </button>
                        </div>
                    </GlassCard>

                    <GlassCard size="md">
                        <div className="text-center">
                            <div
                                className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-xs">⛪</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">교회 기도</h3>
                            <p className="text-gray-600 mb-4">교회와 목회자를 위한 기도 제목.</p>
                            <button
                                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                                교회 기도
                            </button>
                        </div>
                    </GlassCard>

                    <GlassCard size="md">
                        <div className="text-center">
                            <div
                                className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-xs">💼</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">직장 기도</h3>
                            <p className="text-gray-600 mb-4">직장과 학업에 관한 기도 제목.</p>
                            <button
                                className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors">
                                직장 기도
                            </button>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </DashboardLayout>
    )
}
